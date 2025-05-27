import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const router = Router()
const prisma = new PrismaClient()

const insumoSchema = z.object({
    nome: z.string().min(1, 'Nome do insumo é obrigatório'),
    codigo: z.string().min(1, 'Código do insumo é obrigatório'),
    quantidade: z.number({ required_error: 'Quantidade é obrigatória' }).int(),
    ordemServicoId: z.number({ required_error: 'ID da ordem de serviço é obrigatório' }).int()
})

router.get("/", async (req, res) => {
  try {
    const insumos = await prisma.insumo.findMany({
      include: {
        ordemServico: true,
      },
    });
    res.status(200).json(insumos);
  } catch (err) {
    console.error("Erro ao buscar insumos:", err);
    res.status(500).json({ error: "Erro ao buscar insumos." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const insumo = await prisma.insumo.findUnique({
      where: { id },
      include: {
        ordemServico: true,
      },
    });
    if (!insumo) {
      res.status(404).json({ error: "Insumo não encontrado." });
      return;
    }
    res.status(200).json(insumo);
  } catch (err) {
    console.error("Erro ao buscar insumo:", err);
    res.status(500).json({ error: "Erro ao buscar insumo." });
  }
});

router.post("/", async (req, res) => {
  try {
    const parsed = insumoSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }
    const { nome, codigo, quantidade, ordemServicoId } = parsed.data;

    const insumo = await prisma.insumo.create({
      data: {
        nome,
        codigo,
        quantidade,
        ordemServico: { connect: { id: ordemServicoId } }
      }
    });
    res.status(201).json(insumo);
    } catch (err) {
    console.error("Erro ao criar insumo:", err);
    res.status(500).json({ error: "Erro ao criar insumo." });
    }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "ID inválido." });
      return;
    }

    const insumoExistente = await prisma.insumo.findUnique({ where: { id } });
    if (!insumoExistente) {
      res.status(404).json({ error: "Insumo não encontrado." });
      return;
    }

    const parsed = insumoSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const { nome, quantidade, ordemServicoId } = parsed.data;

    const insumoAtualizado = await prisma.insumo.update({
      where: { id },
      data: {
        nome,
        quantidade,
        ordemServico: ordemServicoId ? { connect: { id: ordemServicoId } } : undefined
      }
    });

    res.status(200).json(insumoAtualizado);
  } catch (err) {
    console.error("Erro ao atualizar insumo:", err);
    res.status(500).json({ error: "Erro ao atualizar insumo." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "ID inválido." });
      return;
    }

    const insumoExistente = await prisma.insumo.findUnique({ where: { id } });
    if (!insumoExistente) {
      res.status(404).json({ error: "Insumo não encontrado." });
      return;
    }

    await prisma.insumo.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar insumo:", err);
    res.status(500).json({ error: "Erro ao deletar insumo." });
  }
});

export default router;
