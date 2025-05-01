import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

const areaSchema = z.object({
  nome: z.string().min(1, 'Nome da área é obrigatório'),
  id_planta: z.number({ required_error: 'ID da planta é obrigatório' }).int()
});

router.post('/', async (req, res) => {
  try {
    const dados = areaSchema.parse(req.body);
    const novaArea = await prisma.area.create({ data: dados });
    res.status(201).json(novaArea);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;