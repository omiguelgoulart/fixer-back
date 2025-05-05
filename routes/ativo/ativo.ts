import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'
import { gerarPrefixo } from "../../utils/geraPrefixo"

const prisma = new PrismaClient()
const router = Router()

const ativoSchema = z.object({
  nome: z.string().min(1, 'Nome do ativo é obrigatório'),
  fabricante: z.string().min(1, 'Fabricante é obrigatório'),
  modelo: z.string().min(1, 'Modelo é obrigatório'),
  id_sistema: z.number({ required_error: 'ID do sistema é obrigatório' }).int(),
  tipo_ativo: z.enum(['MECANICO', 'ELETRICO', 'ELETRONICO', 'HIDRAULICO', 'OUTRO'], { required_error: 'Tipo de ativo é obrigatório' }),
  situacao: z.enum(['ATIVO', 'INATIVO', 'MANUTENCAO', 'DESCARTADO']).optional(),
  data_aquisicao: z.coerce.date().optional(),
  localizacao_interna: z.string().optional(),
  criticidade: z.enum(['ALTA', 'MEDIA', 'BAIXA'], { required_error: 'Criticidade é obrigatória' })
});

router.post('/', async (req, res) => {
  try {
    const dados = ativoSchema.parse(req.body);

    const prefixo = gerarPrefixo(dados.tipo_ativo);
    const count = await prisma.ativo.count({ where: { tipo_ativo: dados.tipo_ativo } });
    const numeroSequencial = String(count + 1).padStart(4, '0');
    const codigo = `${prefixo}-${numeroSequencial}`;

    const novoAtivo = await prisma.ativo.create({
      data: {
        ...dados,
        codigo // <- CAMPO CORRETO
      }
    });

    res.status(201).json(novoAtivo);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const ativos = await prisma.ativo.findMany();
    res.status(200).json(ativos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar ativos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const ativo = await prisma.ativo.findUnique({
      where: { id },
      include: { subativos: true } // Inclui os sub-ativos relacionados
    });
    if (!ativo) {
      res.status(404).json({ error: 'Ativo não encontrado' });
      return;
    }
    res.status(200).json(ativo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar ativo' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const dadosParciais = req.body;
    const ativo = await prisma.ativo.findUnique({ where: { id } });
    if (!ativo) {
      res.status(404).json({ error: 'Ativo não encontrado' });
      return;
    }

    const atualizado = await prisma.ativo.update({
      where: { id },
      data: dadosParciais
    });

    res.status(200).json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.ativo.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar ativo' });
  }
});
export default router;
