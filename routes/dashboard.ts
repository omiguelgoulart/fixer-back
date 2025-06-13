import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/stats', async (req, res) => {
  try {
    const dataAtual = new Date();
    const proximaSemana = new Date(dataAtual);
    proximaSemana.setDate(dataAtual.getDate() + 7);

    // Executa todas as consultas ao banco em paralelo para mais eficiência
    const [
      manutencoesPendentes,
      manutencoesAtrasadas,
      ativosComAlertas,
      proximasManutencoes,
      totalAtivos,
      ativosEmManutencao,
      indicadoresDesempenho, // Mantido como placeholder por enquanto
      distribuicaoPorTipo,
      distribuicaoPorStatus,
      alertasENotificacoes,
    ] = await Promise.all([
      // 1. KPI: Manutenções Pendentes (OS que não estão concluídas)
      prisma.ordemServico.count({
        where: { status: { not: 'CONCLUIDA' } },
      }),

      // 2. KPI: Manutenções Atrasadas
      prisma.ordemServico.count({
        where: {
          NOT: { status: 'CONCLUIDA' },
          dataVencimento: { lt: dataAtual },
        },
      }),

      // 3. KPI: Ativos com Alertas (vamos definir como OS com prioridade ALTA em aberto)
      prisma.ativo.count({
        where: {
          ordensServico: {
            some: {
              status: { not: 'CONCLUIDA' },
              prioridade: 'ALTA',
            },
          },
        },
      }),

      // 4. Lista: Próximas Manutenções (agendadas para os próximos 7 dias)
      prisma.ordemServico.findMany({
        where: {
          status: { not: 'CONCLUIDA' },
          dataInicioPlanejada: {
            gte: dataAtual,
            lte: proximaSemana,
          },
        },
        orderBy: { dataInicioPlanejada: 'asc' },
        take: 4, // Pega as 4 mais próximas para a lista
        include: { ativo: { select: { nome: true } } }, // Inclui apenas o nome do ativo
      }),
      
      // Para o cálculo de Disponibilidade Geral
      prisma.ativo.count(),
      prisma.ativo.count({ where: { situacao: 'MANUTENCAO' } }),

      // Placeholder para indicadores de desempenho (MTBF, etc.)
      // A lógica real aqui pode ser bem complexa e exigir mais dados
      Promise.resolve({
        mtbf: 127.5,
        mttr: 3.2,
        taxaConclusaoPreventivas: 89.7,
        custoPorValor: 2.8
      }),
      
      // Consulta para o gráfico de Distribuição por Tipo
      prisma.ordemServico.groupBy({
        by: ['tipoManutencao'],
        _count: { _all: true },
      }),
      
      // Consulta para o gráfico de Distribuição por Status
      prisma.ordemServico.groupBy({
        by: ['status'],
        _count: { _all: true },
      }),
      
      // Consulta para Alertas e Notificações (ex: 3 OS atrasadas mais críticas)
      prisma.ordemServico.findMany({
        where: {
          NOT: { status: 'CONCLUIDA' },
          dataVencimento: { lt: dataAtual }
        },
        orderBy: [
          { prioridade: 'desc' }, // ALTA vem primeiro
          { dataVencimento: 'asc' }  // As mais antigas primeiro
        ],
        take: 3,
        include: { ativo: { select: { nome: true } } }
      })
    ]);

    // Cálculo da Disponibilidade Geral
    const disponibilidadeGeral = totalAtivos > 0 
      ? ((totalAtivos - ativosEmManutencao) / totalAtivos) * 100 
      : 100;

    // Monta o objeto final da resposta
    const responsePayload = {
      kpis: {
        manutencoesPendentes,
        manutencoesAtrasadas,
        ativosComAlertas,
        disponibilidadeGeral: parseFloat(disponibilidadeGeral.toFixed(1)),
      },
      indicadoresDesempenho,
      proximasManutencoes,
      distribuicao: {
        porTipo: distribuicaoPorTipo.map(item => ({ name: item.tipoManutencao, value: item._count._all })),
        porStatus: distribuicaoPorStatus.map(item => ({ name: item.status, value: item._count._all })),
      },
      alertasENotificacoes,
    };

    res.status(200).json(responsePayload);

  } catch (error) {
    console.error("Erro ao buscar estatísticas do dashboard:", error);
    res.status(500).json({ erro: "Não foi possível carregar os dados do dashboard." });
  }
});

export default router;