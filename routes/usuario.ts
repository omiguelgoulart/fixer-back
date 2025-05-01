import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import bcrypt from 'bcrypt'
import { z } from 'zod'
import { validaSenha } from "../utils/validaSenha"

const prisma = new PrismaClient()
const router = Router()

const clienteSchema = z.object({
  nome: z.string().min(10, "Nome deve ter pelo menos 10 caracteres"),
  email: z.string(),
  senha: z.string()
})

router.get("/", async (req, res) => {
    try {
      const clientes = await prisma.cliente.findMany()
      res.status(200).json(clientes)
    } catch (error) {
      res.status(400).json(error)
    }
  })

router.post("/", async (req, res) => {

    const valida = clienteSchema.safeParse(req.body)
    if (!valida.success) {
      res.status(400).json({ erro: valida.error })
      return
    }
  
    const erros = validaSenha(valida.data.senha)
    if (erros.length > 0) {
      res.status(400).json({ erro: erros.join("; ") })
      return
    }
  
    // 12 é o número de voltas (repetições) que o algoritmo faz
    // para gerar o salt (sal/tempero)
    const salt = bcrypt.genSaltSync(12)
    // gera o hash da senha acrescida do salt
    const hash = bcrypt.hashSync(valida.data.senha, salt)
  
    const { nome, email } = valida.data
    // para o campo senha, atribui o hash gerado
    try {
      const cliente = await prisma.cliente.create({
        data: { ...valida.data, senha: hash }
      })
      res.status(201).json(cliente)
    } catch (error) {
      res.status(400).json(error)
    }
  })

  export default router