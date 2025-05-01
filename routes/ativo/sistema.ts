import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

const sistemaSchema = z.object({
  nome: z.string().min(1, 'Nome do sistema é obrigatório'),
  id_area: z.number({ required_error: 'ID da área é obrigatório' }).int()
});

router.post('/', async (req, res) => {
  try {
    const dados = sistemaSchema.parse(req.body);
    const novoSistema = await prisma.sistema.create({ data: dados });
    res.status(201).json(novoSistema);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;