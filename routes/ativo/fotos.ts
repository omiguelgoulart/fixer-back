import {  PrismaClient } from '@prisma/client'
import { Router } from 'express'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    return {
      folder: 'imagens_carros',
      allowed_formats: ['jpg', 'jpeg', 'png'],
      public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
    }  
  },
})

const upload = multer({ storage })

const prisma = new PrismaClient()

const router = Router()

router.get("/", async (req, res) => {
  try {
    const fotos = await prisma.foto.findMany({
      include: {
        ativo: true,
      },
    });
    res.status(200).json(fotos);
  } catch (err) {
    console.error("Erro ao buscar fotos:", err);
    res.status(500).json({ error: "Erro ao buscar fotos." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const foto = await prisma.foto.findUnique({
      where: { id },
      include: {
        ativo: true,
      },
    });
    if (!foto) {
      res.status(404).json({ error: "Foto não encontrada." });
      return;
    }
    res.status(200).json(foto);
  } catch (err) {
    console.error("Erro ao buscar foto:", err);
    res.status(500).json({ error: "Erro ao buscar foto." });
  }
}
);

router.post("/", upload.single("imagem"), async (req, res) => {
  try {
    console.log("req.file:", req.file);
    console.log("req.body:", req.body);

    if (!req.file) {
      res.status(400).json({ error: "Imagem é obrigatória." });
      return;
    }

    const result = req.file as Express.Multer.File & { secure_url: string };
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
    // Log detalhado para o desenvolvedor
    console.error("Erro no upload da imagem:", {
      message: err instanceof Error ? err.message : err,
      stack: err instanceof Error ? err.stack : undefined,
    });

    // Resposta mais detalhada para o cliente (sem expor stack trace)
    res.status(500).json({
      error: "Erro ao salvar foto.",
      details: err instanceof Error ? err.message : String(err),
    });
  } 
}
);

export default router