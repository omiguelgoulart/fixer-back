import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'
import { gerarPrefixo } from "../../utils/geraPrefixo"
import cloudinary from "../../lib/cloudinary";
import { upload } from "../../middlewares/upload";

const prisma = new PrismaClient()
const router = Router()

const ativoSchema = z.object({
  nome: z.string().min(1, 'Nome do ativo é obrigatório'),
  fabricante: z.string().min(1, 'Fabricante é obrigatório'),
  modelo: z.string().min(1, 'Modelo é obrigatório'),
  id_sistema: z.number({ required_error: 'ID do sistema é obrigatório' }).int(),
  tipo_ativo: z.enum(['MECANICO', 'ELETRICO', 'ELETRONICO', 'HIDRAULICO', 'OUTRO'], { required_error: 'Tipo de ativo é obrigatório' }),
  situacao: z.enum(['ATIVO', 'INATIVO', 'MANUTENCAO', 'DESCARTADO']).optional(),
  data_aquisicao: z.coerce.date().optional(),
  localizacao_interna: z.string().optional(),
  criticidade: z.enum(['ALTA', 'MEDIA', 'BAIXA'], { required_error: 'Criticidade é obrigatória' }),
  imagem: z.string().optional()
});

router.post("/fotos", upload.single("imagem"), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "Imagem é obrigatória." });
      return;
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    const { descricao = "", ativoId } = req.body;

    if (!ativoId) {
      res.status(400).json({ error: "ativoId é obrigatório." });
      return;
    }

    const novaFoto = await prisma.foto.create({
      data: {
        url: result.secure_url,
        descricao,
        ativoId: Number(ativoId),
      },
    });

    res.status(201).json(novaFoto);
  } catch (err) {
    console.error("Erro no upload da imagem:", err);
    res.status(500).json({ error: "Erro ao salvar foto." });
  }
});


router.post("/",  async (req, res) => {
    try {
    const parsed = ativoSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const {
      nome,
      fabricante,
      modelo,
      id_sistema,
      tipo_ativo,
      situacao = "ATIVO",
      data_aquisicao,
      localizacao_interna,
      criticidade
    } = parsed.data;

    const prefixo = gerarPrefixo(tipo_ativo);
    const count = await prisma.ativo.count({ where: { tipo_ativo } });
    const numeroSequencial = String(count + 1).padStart(4, "0");
    const codigo = `${prefixo}-${numeroSequencial}`;

    const ativo = await prisma.ativo.create({
      data: {
        nome,
        fabricante,
        modelo,
        id_sistema,
        tipo_ativo,
        situacao,
        data_aquisicao,
        localizacao_interna,
        criticidade,
        codigo
      }
    });

    res.status(201).json(ativo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar ativo" });
  }
});

router.get('/', async (req, res) => {
  try {
    const ativos = await prisma.ativo.findMany();
    res.status(200).json(ativos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar ativos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const ativo = await prisma.ativo.findUnique({
      where: { id },
      include: { subativos: true } // Inclui os sub-ativos relacionados
    });
    if (!ativo) {
      res.status(404).json({ error: 'Ativo não encontrado' });
      return;
    }
    res.status(200).json(ativo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar ativo' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const ativoExistente = await prisma.ativo.findUnique({ where: { id } });
    if (!ativoExistente) {
      res.status(404).json({ error: 'Ativo não encontrado' });
      return;
    }

    // ✅ Valida os dados recebidos
    const parsed = ativoSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.flatten() });
      return;
    }

    const {
      nome,
      fabricante,
      modelo,
      id_sistema,
      tipo_ativo,
      situacao = "ATIVO",
      data_aquisicao,
      localizacao_interna,
      criticidade,
    
    } = parsed.data;

    // ✅ Só gera novo código se o tipo_ativo foi alterado
    let codigo = ativoExistente.codigo;
    if (tipo_ativo !== ativoExistente.tipo_ativo) {
      const prefixo = gerarPrefixo(tipo_ativo);
      const count = await prisma.ativo.count({ where: { tipo_ativo } });
      const numeroSequencial = String(count + 1).padStart(4, "0");
      codigo = `${prefixo}-${numeroSequencial}`;
    }

    const atualizado = await prisma.ativo.update({
      where: { id },
      data: {
        nome,
        fabricante,
        modelo,
        id_sistema,
        tipo_ativo,
        situacao,
        data_aquisicao,
        localizacao_interna,
        criticidade,
        codigo,
      },
    });

    res.status(200).json(atualizado);
  } catch (err: any) {
    console.error("Erro ao atualizar ativo:", err);
    res.status(500).json({ error: 'Erro ao atualizar ativo' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.ativo.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: 'Erro ao deletar ativo' });
  }
});
export default router;
