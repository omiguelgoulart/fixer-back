-- CreateEnum
CREATE TYPE "TipoAtivo" AS ENUM ('MECANICO', 'ELETRICO', 'ELETRONICO', 'HIDRAULICO', 'OUTRO');

-- CreateEnum
CREATE TYPE "SituacaoAtivo" AS ENUM ('ATIVO', 'INATIVO', 'MANUTENCAO', 'DESCARTADO');

-- CreateEnum
CREATE TYPE "Criticidade" AS ENUM ('ALTA', 'MEDIA', 'BAIXA');

-- CreateEnum
CREATE TYPE "TipoManutencao" AS ENUM ('CORRETIVA', 'PREVENTIVA', 'PREDITIVA');

-- CreateTable
CREATE TABLE "plantas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "plantas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "areas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "id_planta" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sistemas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "id_area" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "sistemas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ativos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "data_aquisicao" TIMESTAMP(3),
    "localizacao_interna" TEXT,
    "tipo_ativo" "TipoAtivo" NOT NULL,
    "situacao" "SituacaoAtivo" NOT NULL DEFAULT 'ATIVO',
    "criticidade" "Criticidade" NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "ativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "falhas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_ocorrencia" TIMESTAMP(3) NOT NULL,
    "criticidade" "Criticidade" NOT NULL,
    "id_ativo" INTEGER NOT NULL,

    CONSTRAINT "falhas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subativos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "id_ativo" INTEGER NOT NULL,

    CONSTRAINT "subativos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manutencoes" (
    "id" SERIAL NOT NULL,
    "tipo" "TipoManutencao" NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,
    "id_ativo" INTEGER NOT NULL,

    CONSTRAINT "manutencoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "plantas_codigo_key" ON "plantas"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "areas_codigo_key" ON "areas"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "sistemas_codigo_key" ON "sistemas"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "ativos_codigo_key" ON "ativos"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "subativos_codigo_key" ON "subativos"("codigo");

-- AddForeignKey
ALTER TABLE "areas" ADD CONSTRAINT "areas_id_planta_fkey" FOREIGN KEY ("id_planta") REFERENCES "plantas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sistemas" ADD CONSTRAINT "sistemas_id_area_fkey" FOREIGN KEY ("id_area") REFERENCES "areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ativos" ADD CONSTRAINT "ativos_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistemas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "falhas" ADD CONSTRAINT "falhas_id_ativo_fkey" FOREIGN KEY ("id_ativo") REFERENCES "ativos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subativos" ADD CONSTRAINT "subativos_id_ativo_fkey" FOREIGN KEY ("id_ativo") REFERENCES "ativos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manutencoes" ADD CONSTRAINT "manutencoes_id_ativo_fkey" FOREIGN KEY ("id_ativo") REFERENCES "ativos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
