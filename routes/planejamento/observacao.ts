import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const router = Router();
const prisma = new PrismaClient();

const observacaoSchema = z.object({
    conteudo: z.string().min(1, "Conteúdo é obrigatório"),
    ordemServicoId: z
        .number({ required_error: "ID da ordem de serviço é obrigatório" })
        .int(),
    });

router.get("/", async (req, res) => {
    try {
        const observacoes = await prisma.observacao.findMany({
            include: {
                ordemServico: true,
            },
        });
        res.status(200).json(observacoes);
    } catch (err) {
        console.error("Erro ao buscar observações:", err);
        res.status(500).json({ error: "Erro ao buscar observações." });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const observacao = await prisma.observacao.findUnique({
            where: { id },
            include: {
                ordemServico: true,
            },
        });
        if (!observacao) {
            res.status(404).json({ error: "Observação não encontrada." });
            return;
        }
        res.status(200).json(observacao);
    } catch (err) {
        console.error("Erro ao buscar observação:", err);
        res.status(500).json({ error: "Erro ao buscar observação." });
    }
});

router.post("/", async (req, res) => {
    try {
        const parsed = observacaoSchema.safeParse(req.body);
        if (!parsed.success) {
            res.status(400).json({ error: parsed.error.flatten() });
            return;
        }

        const { conteudo, ordemServicoId } = parsed.data;

        const observacao = await prisma.observacao.create({
            data: {
                conteudo,
                ordemServicoId,
            },
            include: {
                ordemServico: true,
            },
        });

        res.status(201).json(observacao);
    } catch (err) {
        console.error("Erro ao criar observação:", err);
        res.status(500).json({ error: "Erro ao criar observação." });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const parsed = observacaoSchema.safeParse(req.body);
        if (!parsed.success) {
            res.status(400).json({ error: parsed.error.flatten() });
            return;
        }

        const { conteudo, ordemServicoId } = parsed.data;

        const observacao = await prisma.observacao.update({
            where: { id },
            data: {
                conteudo,
                ordemServicoId,
            },
            include: {
                ordemServico: true,
            },
        });

        res.status(200).json(observacao);
    } catch (err) {
        console.error("Erro ao atualizar observação:", err);
        res.status(500).json({ error: "Erro ao atualizar observação." });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.observacao.delete({
            where: { id },
        });
        res.status(204).send();
    } catch (err) {
        console.error("Erro ao deletar observação:", err);
        res.status(500).json({ error: "Erro ao deletar observação." });
    }
});

export default router;