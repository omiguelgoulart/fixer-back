import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const router = Router()
const prisma = new PrismaClient()

const manutencaoSchema = z.object({
    tipo: z.enum(['CORRETIVA', 'PREVENTIVA', 'PREDITIVA'], { required_error: 'Tipo de manutenção é obrigatório' }),
    data_inicio: z.coerce.date(),
    data_fim: z.coerce.date().optional(),
    descricao: z.string().min(1, 'Descrição é obrigatória'),
    id_ativo: z.number({ required_error: 'ID do ativo é obrigatório' }).int(),
    id_ordem_servico: z.number({ required_error: 'ID da ordem de serviço é obrigatório' }).int(),
    usuarioId: z.number({ required_error: 'ID do usuário é obrigatório' }).int(),
})

router.get("/", async (req, res) => {
  try {
    const manutencoes = await prisma.manutencao.findMany({
      include: {
        ativo: true,
        ordemServico: true,
        usuario: true,
      },
    });
    res.status(200).json(manutencoes);
  } catch (err) {
    console.error("Erro ao buscar manutenções:", err);
    res.status(500).json({ error: "Erro ao buscar manutenções." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const manutencao = await prisma.manutencao.findUnique({
      where: { id },
      include: {
        ativo: true,
        ordemServico: true,
        usuario: true,
      },
    });
    if (!manutencao) {
      res.status(404).json({ error: "Manutenção não encontrada." });
      return;
    }
    res.status(200).json(manutencao);
  } catch (err) {
    console.error("Erro ao buscar manutenção:", err);
    res.status(500).json({ error: "Erro ao buscar manutenção." });
  }
});

router.post("/", async (req, res) => {
  try {
    const parsed = manutencaoSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const { tipo, data_inicio, data_fim, descricao, id_ativo, id_ordem_servico, usuarioId } = parsed.data;

    const manutencaoData: any = {
      tipo,
      data_inicio,
      descricao,
      ativo: { connect: { id: id_ativo } },
      ordemServico: { connect: { id: id_ordem_servico } },
      usuario: { connect: { id: usuarioId } },
    };
    if (data_fim !== undefined) {
      manutencaoData.data_fim = data_fim;
    }

    const manutencao = await prisma.manutencao.create({
      data: manutencaoData,
    });

    res.status(201).json(manutencao);
  } catch (err) {
    console.error("Erro ao criar manutenção:", err);
    res.status(500).json({ error: "Erro ao criar manutenção." });
  }
});

router.patch("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
        res.status(400).json({ error: "ID inválido" });
        return;
        }
    
        const manutencaoExistente = await prisma.manutencao.findUnique({ where: { id } });
        if (!manutencaoExistente) {
        res.status(404).json({ error: "Manutenção não encontrada" });
        return;
        }
    
        const parsed = manutencaoSchema.safeParse(req.body);
        if (!parsed.success) {
        res.status(400).json({ error: parsed.error.flatten() });
        return;
        }
    
        const { tipo, data_inicio, data_fim, descricao, id_ativo, id_ordem_servico, usuarioId } = parsed.data;
    
        const manutencaoAtualizada = await prisma.manutencao.update({
        where: { id },
        data: {
            tipo,
            data_inicio,
            data_fim,
            descricao,
            ativo: { connect: { id: id_ativo } },
            ordemServico: { connect: { id: id_ordem_servico } },
            usuario: { connect: { id: usuarioId } },
        },
        });
    
        res.status(200).json(manutencaoAtualizada);
    } catch (err) {
        console.error("Erro ao atualizar manutenção:", err);
        res.status(500).json({ error: "Erro ao atualizar manutenção." });
    }
    });

router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
        res.status(400).json({ error: "ID inválido" });
        return;
        }
    
        const manutencaoExistente = await prisma.manutencao.findUnique({ where: { id } });
        if (!manutencaoExistente) {
        res.status(404).json({ error: "Manutenção não encontrada" });
        return;
        }
    
        await prisma.manutencao.delete({ where: { id } });
        res.status(204).send();
    } catch (err) {
        console.error("Erro ao deletar manutenção:", err);
        res.status(500).json({ error: "Erro ao deletar manutenção." });
    }
    });

export default router;