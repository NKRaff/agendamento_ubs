import Ubs from '../models/Ubs.js';

export default new class UbsRepository {
    async findAll() {
        return await Ubs.findAll();
    }

    async findByCnpj(cnpj) {
        return await Ubs.findByPk(cnpj, { raw: true });
    }

    async create(ubs) {
        return await Ubs.create(ubs);
    }

    async update(ubs) {
        return await Ubs.update({
            name: ubs.name,
            street: ubs.street,
            number: ubs.number,
            neighborhood: ubs.neighborhood,
            city: ubs.city,
            state: ubs.state,
            zipCode: ubs.zipCode
        }, { 
            where: { cnpj: ubs.cnpj } 
        });
    }

    async delete(cnpj) {
        return await Ubs.destroy({
            where: { cnpj: cnpj }
        });
    }
}