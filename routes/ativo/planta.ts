import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

const plantaSchema = z.object({
  nome: z.string().min(1, 'Nome da planta é obrigatório'),
  localizacao: z.string().min(1, 'Localização é obrigatória')
});

router.post('/', async (req, res) => {
  try {
    const dados = plantaSchema.parse(req.body);
    const novaPlanta = await prisma.planta.create({ data: dados });
    res.status(201).json(novaPlanta);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;