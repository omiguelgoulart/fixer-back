/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `insumos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[codigo]` on the table `ordens_servico` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "insumos" ALTER COLUMN "nome" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ordens_servico" ADD COLUMN     "codigo" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "insumos_nome_key" ON "insumos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "ordens_servico_codigo_key" ON "ordens_servico"("codigo");
