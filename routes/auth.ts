import { Router, Request, Response } from 'express';
import { PrismaClient, TipoUsuario } from '@prisma/client'; // Importe TipoUsuario se for usá-lo na validação Zod
import { z } from 'zod';
import bcrypt from 'bcryptjs'; 
import crypto from 'crypto'; 
import nodemailer from 'nodemailer';
import { validaSenha } from '../utils/validaSenha'; 

const prisma = new PrismaClient();
const router = Router();

// Configuração do Nodemailer com Mailtrap (ou seu provedor de email)
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST, // Certifique-se que estas variáveis estão no seu .env
  port: parseInt(process.env.MAILTRAP_PORT || "2525", 10),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

// Schema Zod para solicitar redefinição de senha
const esqueciSenhaSchema = z.object({
  email: z.string().email({ message: "Formato de email inválido." }),
});

router.post("/esqueci-senha", async (req, res) => {
  const validation = esqueciSenhaSchema.safeParse(req.body);
  if (!validation.success) {
     res.status(400).json({ erro: "Dados inválidos.", detalhes: validation.error.flatten().fieldErrors });
     return;
  }
  const { email } = validation.data;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });

    if (usuario) {
      const codigoSeisDigitos = crypto.randomInt(100000, 999999).toString();
      const resetTokenExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutos de validade

      await prisma.usuario.update({
        where: { email },
        data: {
          codRecuperaSenha: codigoSeisDigitos, // Armazena o código em texto plano
          codRecuperaSenhaExpiracao: resetTokenExpires,
        },
      });

      const frontendResetUrl = `${process.env.FRONTEND_URL}/redefinir-senha?email=${encodeURIComponent(email)}`;
      const nomeUsuario = usuario.nome || 'Usuário'; // Pega o nome do usuário
      const subject = 'Fixer - Código de Recuperação de Senha';
      const html = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Recuperação de Senha</h2>
          <p>Olá ${nomeUsuario},</p>
          <p>Recebemos uma solicitação para redefinir a senha da sua conta no Fixer.</p>
          <p>Anote ou copie o seu <strong>código de recuperação</strong> abaixo. Você precisará dele na próxima tela:</p>
          <p style="font-size: 24px; font-weight: bold; letter-spacing: 2px; color: #3B82F6; margin: 20px 0; padding: 10px; background-color: #f3f4f6; text-align: center; border-radius: 5px;">
            ${codigoSeisDigitos}
          </p>
          <p>Este código é válido por 15 minutos.</p>
          <p>Para prosseguir com a redefinição de senha, clique no link abaixo:</p>
          <p><a href="${frontendResetUrl}" style="background-color: #3B82F6; color: #ffffff; padding: 12px 25px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; font-weight: bold;       margin: 4px 2px; cursor: pointer; border-radius: 5px; border: 1px solid #2563EB;"">Redefinir Minha Senha Agora</a></p>
          <p>Se o link não funcionar, copie e cole a seguinte URL no seu navegador:</p>
          <p>${frontendResetUrl}</p>
          <p>Se você não solicitou uma redefinição de senha, por favor, ignore este e-mail.</p>
          <p>Atenciosamente,<br>Equipe Fixer</p>
        </div>
      `;

      try {
        await transporter.sendMail({
          from: process.env.EMAIL_FROM, // Ex: "Fixer <nao-responda@fixer.com>"
          to: usuario.email,
          subject,
          html,
        });
        console.log(`Email de recuperação enviado para ${usuario.email}. Código: ${codigoSeisDigitos}`);
      } catch (emailError) {
        console.error("Erro ao enviar email de recuperação:", emailError);
        // Não revelar erro de email ao cliente, mas logar no servidor
      }
    } else {
      console.log(`Tentativa de reset para email não encontrado (ou encontrado, não revelamos): ${email}`);
    }
    
    // Resposta genérica para evitar enumeração de usuários
    res.status(200).json({ message: "Se um usuário com este email existir em nossos registros, um código de redefinição de senha foi enviado." });
    return;
  } catch (error) {
    console.error("Erro ao solicitar redefinição de senha:", error);
    res.status(500).json({ erro: "Erro interno ao processar sua solicitação." });
    return;
  }
});


// Schema Zod para redefinir a senha
const recuperarSenhaSchema = z.object({
  email: z.string().email({ message: "Formato de email inválido." }),
  codigoRecuperacao: z.string().length(6, { message: "O código de recuperação deve ter 6 dígitos." }), 
  novaSenha: z.string(), // A validação da política de senha será feita com a função validaSenha
  confirmacaoNovaSenha: z.string(),
}).refine(data => data.novaSenha === data.confirmacaoNovaSenha, {
  message: "As senhas não coincidem.",
  path: ["confirmacaoNovaSenha"], // Caminho do erro se as senhas não baterem
});


router.post("/recuperar-senha", async (req: Request, res: Response) => {
  const validation = recuperarSenhaSchema.safeParse(req.body);
  if (!validation.success) {
    res.status(400).json({ erro: "Dados inválidos.", detalhes: validation.error.flatten().fieldErrors });
    return;
  }

  const { email, codigoRecuperacao, novaSenha } = validation.data;

  // Validar a nova senha usando sua função customizada
  const errosNovaSenha = validaSenha(novaSenha); // Sua função de validação de política de senha
  if (errosNovaSenha.length > 0) {
    res.status(400).json({ erro: "Nova senha inválida.", detalhes: { novaSenha: errosNovaSenha } });
    return;
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { email },
    });

    // Verifica se o usuário existe, se tem um código e se o código não expirou
    if (!usuario || !usuario.codRecuperaSenha || !usuario.codRecuperaSenhaExpiracao) {
      res.status(400).json({ erro: "Solicitação inválida ou código não encontrado. Por favor, tente novamente." });
      return;
    }

    if (new Date() > usuario.codRecuperaSenhaExpiracao) {
      // Opcional: Limpar o código expirado do banco para segurança
      await prisma.usuario.update({
          where: {id: usuario.id},
          data: {codRecuperaSenha: null, codRecuperaSenhaExpiracao: null}
      });
      res.status(400).json({ erro: "Código de recuperação expirado. Por favor, solicite um novo." });
      return;
    }

    // Compara o código fornecido com o código armazenado (texto plano)
    if (usuario.codRecuperaSenha !== codigoRecuperacao) {
      res.status(400).json({ erro: "Código de recuperação inválido." });
      return;
    }

    // Se o código é válido e não expirou, hasheia a nova senha e atualiza o usuário
    const hashedNovaSenha = await bcrypt.hash(novaSenha, 12); // Usando 12 rounds como no seu user.ts
    await prisma.usuario.update({
      where: { email }, 
      data: {
        senha: hashedNovaSenha,
        codRecuperaSenha: null, // Limpa o código após o uso
        codRecuperaSenhaExpiracao: null, // Limpa a data de expiração
      },
    });

    res.status(200).json({ message: "Senha redefinida com sucesso!" });
    return;

  } catch (error) {
    console.error("Erro ao redefinir senha:", error);
    res.status(500).json({ erro: "Erro interno ao redefinir sua senha." });
    return;
  }
});

export default router;