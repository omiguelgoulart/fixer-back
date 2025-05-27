/*
  Warnings:

  - Changed the type of `quantidade` on the `Insumo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Insumo" DROP COLUMN "quantidade",
ADD COLUMN     "quantidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrdemServico" ALTER COLUMN "dataInicioPlanejada" SET DEFAULT CURRENT_TIMESTAMP;
