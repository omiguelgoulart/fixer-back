import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

const subativoSchema = z.object({
  nome: z.string().min(1, 'Nome do subativo é obrigatório'),
  tipo: z.string().min(1, 'Tipo do subativo é obrigatório'),
  id_ativo: z.number({ required_error: 'ID do ativo é obrigatório' }).int()
});

router.post('/', async (req, res) => {
  try {
    const dados = subativoSchema.parse(req.body);
    const count = await prisma.subativo.count({ where: { id_ativo: dados.id_ativo } });
    const codigo = `SUB-${dados.id_ativo}-${String(count + 1).padStart(2, '0')}`;

    const novoSubativo = await prisma.subativo.create({
      data: {
        ...dados,
        codigo
      }
    });
    res.status(201).json(novoSubativo);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const dados = subativoSchema.parse(req.body);

    const count = await prisma.subativo.count({ where: { id_ativo: dados.id_ativo } });
    const codigo = `SUB-${dados.id_ativo}-${String(count + 1).padStart(2, '0')}`;

    const novoSubativo = await prisma.subativo.create({
      data: {
        ...dados,
        codigo
      }
    });
    res.status(201).json(novoSubativo);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;