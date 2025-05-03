-- CreateTable
CREATE TABLE `plantas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `localizacao` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `plantas_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `areas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `id_planta` INTEGER NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `areas_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sistemas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `id_area` INTEGER NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `sistemas_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ativos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `codigo_patrimonio` VARCHAR(191) NOT NULL,
    `fabricante` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `data_aquisicao` DATETIME(3) NULL,
    `localizacao_interna` VARCHAR(191) NULL,
    `tipo_ativo` ENUM('MECANICO', 'ELETRICO', 'ELETRONICO', 'HIDRAULICO', 'OUTRO') NOT NULL,
    `situacao` ENUM('ATIVO', 'INATIVO', 'MANUTENCAO', 'DESCARTADO') NOT NULL DEFAULT 'ATIVO',
    `criticidade` ENUM('ALTA', 'MEDIA', 'BAIXA') NOT NULL,
    `id_sistema` INTEGER NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ativos_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `falhas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NOT NULL,
    `data_ocorrencia` DATETIME(3) NOT NULL,
    `criticidade` ENUM('ALTA', 'MEDIA', 'BAIXA') NOT NULL,
    `id_ativo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subativos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `id_ativo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `manutencoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` ENUM('CORRETIVA', 'PREVENTIVA', 'PREDITIVA') NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `data_fim` DATETIME(3) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `id_ativo` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `areas` ADD CONSTRAINT `areas_id_planta_fkey` FOREIGN KEY (`id_planta`) REFERENCES `plantas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sistemas` ADD CONSTRAINT `sistemas_id_area_fkey` FOREIGN KEY (`id_area`) REFERENCES `areas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ativos` ADD CONSTRAINT `ativos_id_sistema_fkey` FOREIGN KEY (`id_sistema`) REFERENCES `sistemas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `falhas` ADD CONSTRAINT `falhas_id_ativo_fkey` FOREIGN KEY (`id_ativo`) REFERENCES `ativos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subativos` ADD CONSTRAINT `subativos_id_ativo_fkey` FOREIGN KEY (`id_ativo`) REFERENCES `ativos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `manutencoes` ADD CONSTRAINT `manutencoes_id_ativo_fkey` FOREIGN KEY (`id_ativo`) REFERENCES `ativos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
