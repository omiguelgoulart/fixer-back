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

router.get('/', async (req, res) => {
  try {
    const lista = await prisma.subativo.findMany();
    res.status(200).json(lista);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar subativos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = await prisma.subativo.findUnique({ where: { id } });

    if (!item){
      res.status(404).json({ error: 'Subativo não encontrado' });
      return;
    } 
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar subativo' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const item = await prisma.subativo.findUnique({ where: { id } });

    if (!item){
      res.status(404).json({ error: 'Subativo não encontrado' });
      return;
    } 
    const atualizado = await prisma.subativo.update({ where: { id }, data: req.body });
    res.status(200).json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.subativo.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar subativo' });
  }
});


export default router;