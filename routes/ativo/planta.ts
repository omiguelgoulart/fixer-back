import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

const plantaSchema = z.object({
  nome: z.string().min(1, 'Nome da planta é obrigatório'),
  localizacao: z.string().min(1, 'Localização é obrigatória')
});


router.get('/', async (req, res) => {
  try {
    const plantas = await prisma.planta.findMany({
      include: {
        area: {
          include: {
            sistema: {
              include: {
                ativo: {
                  include: {
                    subativos: true
                  }
                }
              }
            }
          }
        }
      }
    });

    res.status(200).json(plantas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar plantas' });
  }
});


router.post('/', async (req, res) => {
  try {
    const dados = plantaSchema.parse(req.body);
    const count = await prisma.planta.count();
    const codigo = `PLT-${String(count + 1).padStart(3, '0')}`;
    const novaPlanta = await prisma.planta.create({ data: { ...dados, codigo } });
    res.status(201).json(novaPlanta);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const planta = await prisma.planta.findUnique({ where: { id } });
    if (!planta){
      res.status(404).json({ error: 'Planta não encontrada' });
      return;
    }
    const atualizada = await prisma.planta.update({ where: { id }, data: req.body });
    res.status(200).json(atualizada);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.planta.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar planta' });
  }
});

export default router;