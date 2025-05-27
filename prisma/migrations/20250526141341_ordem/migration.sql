/*
  Warnings:

  - You are about to drop the column `falhaId` on the `OrdemServico` table. All the data in the column will be lost.
  - You are about to drop the column `localizacaoId` on the `OrdemServico` table. All the data in the column will be lost.
  - You are about to drop the `Localizacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExecutoresNaOrdemServico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `falhas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `usuarioId` to the `OrdemServico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrdemServico" DROP CONSTRAINT "OrdemServico_falhaId_fkey";

-- DropForeignKey
ALTER TABLE "OrdemServico" DROP CONSTRAINT "OrdemServico_localizacaoId_fkey";

-- DropForeignKey
ALTER TABLE "_ExecutoresNaOrdemServico" DROP CONSTRAINT "_ExecutoresNaOrdemServico_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExecutoresNaOrdemServico" DROP CONSTRAINT "_ExecutoresNaOrdemServico_B_fkey";

-- DropForeignKey
ALTER TABLE "falhas" DROP CONSTRAINT "falhas_id_ativo_fkey";

-- AlterTable
ALTER TABLE "OrdemServico" DROP COLUMN "falhaId",
DROP COLUMN "localizacaoId",
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Localizacao";

-- DropTable
DROP TABLE "_ExecutoresNaOrdemServico";

-- DropTable
DROP TABLE "falhas";

-- AddForeignKey
ALTER TABLE "OrdemServico" ADD CONSTRAINT "OrdemServico_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
