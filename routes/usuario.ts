import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import bcrypt from "bcrypt";
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
});

// GET todos os usuários
router.get("/", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    res.status(500).json({ erro: "Erro interno ao buscar usuários" });
  }
});

// POST novo usuário
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

export default router;
