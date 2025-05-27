import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const router = Router()
const prisma = new PrismaClient()

const tarefaSchema = z.object({
    descricao: z.string().min(1, 'Descrição é obrigatória'),
    concluida: z.boolean().default(false),
    ordemServicoId: z.number({ required_error: 'ID da ordem de serviço é obrigatório' }).int(),
})

router.get("/", async (req, res) => {
  try {
    const tarefas = await prisma.tarefa.findMany({
      include: {
        ordemServico: true,
      },
    });
    res.status(200).json(tarefas);
  } catch (err) {
    console.error("Erro ao buscar tarefas:", err);
    res.status(500).json({ error: "Erro ao buscar tarefas." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const tarefa = await prisma.tarefa.findUnique({
      where: { id },
      include: {
        ordemServico: true,
      },
    });
    if (!tarefa) {
      res.status(404).json({ error: "Tarefa não encontrada." });
      return;
    }
    res.status(200).json(tarefa);
  } catch (err) {
    console.error("Erro ao buscar tarefa:", err);
    res.status(500).json({ error: "Erro ao buscar tarefa." });
  }
});

router.post("/", async (req, res) => {
  try {
    const parsed = tarefaSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const { descricao, concluida, ordemServicoId } = parsed.data;

    const tarefa = await prisma.tarefa.create({
      data: {
        descricao,
        concluida,
        ordemServicoId,
      },
      include: {
        ordemServico: true,
      },
    });

    res.status(201).json(tarefa);
  } catch (err) {
    console.error("Erro ao criar tarefa:", err);
    res.status(500).json({ error: "Erro ao criar tarefa." });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const tarefaExistente = await prisma.tarefa.findUnique({ where: { id } });
    if (!tarefaExistente) {
      res.status(404).json({ error: 'Tarefa não encontrada' });
      return;
    }

    const parsed = tarefaSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const updatedTarefa = await prisma.tarefa.update({
      where: { id },
      data: parsed.data,
      include: {
        ordemServico: true,
      },
    });

    res.status(200).json(updatedTarefa);
  } catch (err) {
    console.error("Erro ao atualizar tarefa:", err);
    res.status(500).json({ error: "Erro ao atualizar tarefa." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }
    const tarefaExistente = await prisma.tarefa.findUnique({ where: { id } });
    if (!tarefaExistente) {
      res.status(404).json({ error: 'Tarefa não encontrada' });
      return;
    }
    await prisma.tarefa.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar tarefa:", err);
    res.status(500).json({ error: "Erro ao deletar tarefa." });
  }
});

export default router;