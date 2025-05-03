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
    const count = await prisma.area.count();
    const codigo = `ARE-${String(count + 1).padStart(3, '0')}`;
    const novaArea = await prisma.area.create({ data: { ...dados, codigo } });
    res.status(201).json(novaArea);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const dados = areaSchema.parse(req.body);

    const count = await prisma.area.count();
    const codigo = `ARE-${String(count + 1).padStart(3, '0')}`;

    const novaArea = await prisma.area.create({
      data: {
        ...dados,
        codigo
      }
    });
    res.status(201).json(novaArea);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const areas = await prisma.area.findMany();
    res.status(200).json(areas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar áreas' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const area = await prisma.area.findUnique({ where: { id } });
    if (!area){
      res.status(404).json({ error: 'Área não encontrada' });
      return;
    } 
    res.status(200).json(area);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar área' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const area = await prisma.area.findUnique({ where: { id } });

    if (!area){
      res.status(404).json({ error: 'Área não encontrada' });
      return;
    } 

    const atualizada = await prisma.area.update({ where: { id }, data: req.body });
    res.status(200).json(atualizada);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.area.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar área' });
  }
});

export default router;