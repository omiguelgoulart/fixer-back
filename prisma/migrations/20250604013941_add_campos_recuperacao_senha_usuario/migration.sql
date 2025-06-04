/*
  Warnings:

  - A unique constraint covering the columns `[codRecuperaSenha]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "codRecuperaSenha" TEXT,
ADD COLUMN     "codRecuperaSenhaExpiracao" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_codRecuperaSenha_key" ON "usuarios"("codRecuperaSenha");
