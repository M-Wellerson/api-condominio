const { PrismaClient } = require("@prisma/client");
const { prismaOffsetPagination } = require('prisma-offset-pagination');

module.exports = class Condominio {
    constructor( condominio ) {
        this.prisma = new PrismaClient;
    }
    async create( condominio ) {
        await this.prisma.condominio.create({
            data: {
                tipo: condominio.tipo,
                nome_fantasia: condominio.nome_fantasia,
            },
        })
    }

    async update( id, data ) {
        await this.prisma.condominio.update({
            where: {id},
            data,
        })
    }

    async getById( id ) {
        return await this.prisma.condominio.findUnique({
            where: {
                id
            },
        })
    }

    async getAll() {
        const result = prismaOffsetPagination({
            model: Condominio,
            size: 5,
            buttonNum: 7,
            orderBy: 'id',
            orderDirection: 'desc',
            prisma: this.prisma
        });
        return result;
    }

}