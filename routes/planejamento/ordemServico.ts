// routes/ordemServico.ts
import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const router = Router();
const prisma = new PrismaClient();

const ordemServicoSchema = z.object({
  titulo: z.string(),
  status: z.enum(["EM_ABERTO", "EM_ANDAMENTO", "CONCLUIDA"]),
  codigo: z.string().optional(), // O código será gerado automaticamente
  prioridade: z.enum(["ALTA", "MEDIA", "BAIXA"]),
  responsavelId: z.number(),
  usuarioId: z.number(),
  ativoId: z.number(),
  tipoManutencao: z.enum(["CORRETIVA", "PREVENTIVA", "PREDITIVA"]),
  dataVencimento: z.coerce.date(),
  dataInicioPlanejada: z.coerce.date(),
  observacoes: z.string().optional(),
});

router.get("/", async (req, res) => {
  try {
    const ordensServico = await prisma.ordemServico.findMany({
      include: {
        ativo: true,
        responsavel: true,
        usuario: true,
        tarefas: true,
        insumos: true,
      },
    });
    res.status(200).json(ordensServico);
  } catch (err) {
    console.error("Erro ao buscar ordens de serviço:", err);
    res.status(500).json({ error: "Erro ao buscar ordens de serviço." });
  }
});

router.get("/:id/os", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const ordemServico = await prisma.ordemServico.findUnique({
      where: { id },
      include: {
        ativo: true,
        responsavel: true,
        usuario: true,
        tarefas: true,
        insumos: true,
      },
    });
    if (!ordemServico) {
      res.status(404).json({ error: "Ordem de serviço não encontrada." });
      return;
    }
    res.status(200).json(ordemServico);
  } catch (err) {
    console.error("Erro ao buscar ordem de serviço:", err);
    res.status(500).json({ error: "Erro ao buscar ordem de serviço." });
  }
});

router.post("/", async (req, res) => {
  try {
    const parsed = ordemServicoSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const {
      titulo,
      status,
      prioridade,
      responsavelId,
      ativoId,
      dataVencimento,
      dataInicioPlanejada,
      tipoManutencao,
      usuarioId,
    } = parsed.data;

    const count = await prisma.ordemServico.count();
    const prefixo = `OS${String(count + 1).padStart(3, "0")}`;
    const codigo = `${prefixo}-${new Date().getFullYear()}`;

    const ordemServico = await prisma.ordemServico.create({
      data: {
        titulo,
        codigo,
        status,
        prioridade,
        responsavelId,
        ativoId,
        dataVencimento,
        tipoManutencao,
        usuarioId,
        dataInicioPlanejada,
      },
    });

    res.status(201).json(ordemServico);
  } catch (err) {
    console.error("Erro ao criar ordem de serviço:", err);
    res.status(500).json({ error: "Erro ao criar ordem de serviço." });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "ID inválido" });
      return;
    }

    const ordemServicoExistente = await prisma.ordemServico.findUnique({
      where: { id },
    });
    if (!ordemServicoExistente) {
      res.status(404).json({ error: "Ordem de serviço não encontrada" });
      return;
    }

    // Permitir atualização parcial: só os campos enviados no body serão validados e atualizados
    const partialSchema = ordemServicoSchema.partial();
    const parsed = partialSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const updatedOrdemServico = await prisma.ordemServico.update({
      where: { id },
      data: parsed.data,
    });

    res.status(200).json(updatedOrdemServico);
  } catch (err) {
    console.error("Erro ao atualizar ordem de serviço:", err);
    res.status(500).json({ error: "Erro ao atualizar ordem de serviço." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "ID inválido" });
      return;
    }
    const ordemServicoExistente = await prisma.ordemServico.findUnique({
      where: { id },
    });
    if (!ordemServicoExistente) {
      res.status(404).json({ error: "Ordem de serviço não encontrada" });
      return;
    }
    await prisma.ordemServico.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    console.error("Erro ao deletar ordem de serviço:", err);
    res.status(500).json({ error: "Erro ao deletar ordem de serviço." });
  }
});

export default router;
