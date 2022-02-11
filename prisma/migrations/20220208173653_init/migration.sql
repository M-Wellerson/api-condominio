-- CreateTable
CREATE TABLE `Condominio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(255) NOT NULL,
    `nome_fantasia` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
