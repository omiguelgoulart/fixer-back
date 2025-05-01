import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'

const prisma = new PrismaClient()
const router = Router()

const ativoSchema = z.object({
  nome: z.string().min(1, 'Nome do ativo é obrigatório'),
  codigo_patrimonio: z.string().min(1, 'Código de patrimônio é obrigatório'),
  fabricante: z.string().min(1, 'Fabricante é obrigatório'),
  modelo: z.string().min(1, 'Modelo é obrigatório'),
  id_sistema: z.number({ required_error: 'ID do sistema é obrigatório' }).int(),
  tipo_ativo: z.enum(['MECANICO', 'ELETRICO', 'ELETRONICO', 'HIDRAULICO', 'OUTRO'], { required_error: 'Tipo de ativo é obrigatório' }),
  situacao: z.enum(['ATIVO', 'INATIVO', 'MANUTENCAO', 'DESCARTADO']).optional(),
  data_aquisicao: z.coerce.date().optional(),
  localizacao_interna: z.string().optional(),
  criticidade: z.enum(['ALTA', 'MEDIA', 'BAIXA'], { required_error: 'Criticidade é obrigatória' })
});

router.post('/', async (req, res) => {
  try {
    const dados = ativoSchema.parse(req.body);
    const novoAtivo = await prisma.ativo.create({ data: dados });
    res.status(201).json(novoAtivo);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;