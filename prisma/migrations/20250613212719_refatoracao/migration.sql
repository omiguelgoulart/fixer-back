/*
  Warnings:

  - You are about to drop the `manutencoes` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "TipoAtivo" ADD VALUE 'PNEUMATICO';

-- DropForeignKey
ALTER TABLE "manutencoes" DROP CONSTRAINT "manutencoes_id_ativo_fkey";

-- DropForeignKey
ALTER TABLE "manutencoes" DROP CONSTRAINT "manutencoes_ordemServicoId_fkey";

-- DropForeignKey
ALTER TABLE "manutencoes" DROP CONSTRAINT "manutencoes_usuarioId_fkey";

-- AlterTable
ALTER TABLE "ordens_servico" ALTER COLUMN "dataInicioPlanejada" DROP DEFAULT;

-- DropTable
DROP TABLE "manutencoes";
