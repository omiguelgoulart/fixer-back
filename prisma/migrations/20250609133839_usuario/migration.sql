/*
  Warnings:

  - You are about to drop the `fotos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fotos" DROP CONSTRAINT "fotos_ativoId_fkey";

-- DropTable
DROP TABLE "fotos";
