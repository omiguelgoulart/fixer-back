import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { validaSenha } from "../utils/validaSenha";

const prisma = new PrismaClient();
const router = Router();

const usuarioSchema = z.object({
  nome: z.string().min(10, "Nome deve ter pelo menos 10 caracteres"),
  email: z.string().email("E-mail inválido"),
  senha: z.string(),
  ativo: z.boolean().default(true),
  tipo: z.enum(["GESTOR", "GERENTE", "TECNICO"]),
  telefone: z.string().optional(),
  dataContratacao: z.string().optional(),
});

router.get("/", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      orderBy: { nome: "asc" }
    });
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ erro: "Erro interno ao buscar usuários" });
  }
});

router.post("/", async (req, res) => {
  const valida = usuarioSchema.safeParse(req.body);

  if (!valida.success) {
    res.status(400).json({ erro: valida.error.format() });
    return;
  }

  const errosSenha = validaSenha(valida.data.senha);
  if (errosSenha.length > 0) {
    res.status(400).json({ erro: errosSenha.join("; ") });
    return;
  }

  try {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(valida.data.senha, salt);

    const usuario = await prisma.usuario.create({
      data: {
        ...valida.data,
        senha: hash,
      },
    });

    res.status(201).json(usuario);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ erro: "Erro ao criar usuário" });
  }
});

router.patch("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ erro: "ID inválido" });
    return;
  }
  const valida = usuarioSchema.safeParse(req.body);
  if (!valida.success) {
    res.status(400).json({ erro: valida.error.format() });
    return;
  }
  const errosSenha = validaSenha(valida.data.senha);
  if (errosSenha.length > 0) {
    res.status(400).json({ erro: errosSenha.join("; ") });
    return;
  }
  try {
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuarioExistente) {
      res.status(404).json({ erro: "Usuário não encontrado" });
      return;
    }

    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(valida.data.senha, salt);

    const partialSchema = usuarioSchema.partial();
    const parsed = partialSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ erro: parsed.error.format() });
      return;
    }
    
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data: {
        ...valida.data,
        senha: hash,
      },
    });

    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ erro: "Erro ao atualizar usuário" });
  }
});

// GET usuário por cargo, sendo Tecnico
router.get("/tecnico", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      where: { tipo: "TECNICO" },
      orderBy: { nome: "asc" },
    });
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao listar usuários técnicos:", error);
    res.status(500).json({ erro: "Erro interno ao buscar usuários técnicos" });
  }
});

// GET usuário por ID e cargo, sendo tecnico
router.get("/tecnico/:id/tec", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ erro: "ID inválido" });
    return;
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { id, tipo: "TECNICO" },
    });

    if (!usuario) {
      res.status(404).json({ erro: "Usuário técnico não encontrado" });
      return;
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuário técnico:", error);
    res.status(500).json({ erro: "Erro interno ao buscar usuário técnico" });
  }
});

export default router;
