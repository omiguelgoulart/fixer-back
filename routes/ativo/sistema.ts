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
    const count = await prisma.sistema.count();
    const codigo = `SYS-${String(count + 1).padStart(3, '0')}`;
    const novoSistema = await prisma.sistema.create({ data: { ...dados, codigo } });
    res.status(201).json(novoSistema);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.post('/', async (req, res) => {
  try {
    const dados = sistemaSchema.parse(req.body);

    const count = await prisma.sistema.count();
    const codigo = `SYS-${String(count + 1).padStart(3, '0')}`;

    const novoSistema = await prisma.sistema.create({
      data: {
        ...dados,
        codigo
      }
    });
    res.status(201).json(novoSistema);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const sistemas = await prisma.sistema.findMany();
    res.status(200).json(sistemas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar sistemas' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const sistema = await prisma.sistema.findUnique({ where: { id } });

    if (!sistema) {
      res.status(404).json({ error: 'Sistema não encontrado' });
      return;
    }
    res.status(200).json(sistema);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar sistema' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const sistema = await prisma.sistema.findUnique({ where: { id } });
    
    if (!sistema){
      res.status(404).json({ error: 'Sistema não encontrado' });
      return;
    } 
    const atualizado = await prisma.sistema.update({ where: { id }, data: req.body });
    res.status(200).json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.sistema.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar sistema' });
  }
});

export default router;