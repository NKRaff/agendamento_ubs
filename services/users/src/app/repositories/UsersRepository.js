import Users from '../models/Users.js';

export default new class UsersRepository {
    async findAll() {
        return await Users.findAll();
    }

    async findByCpf(cpf) {
        return await Users.findByPk(cpf, { raw: true });
    }

    async findByEmail(email) {
        return await Users.findOne({
            where: { email: email },
            raw: true
        });
    }

    async create(user) {
        return await Users.create(user);
    }

    async update(user) {
        return await Users.update({
            name: user.name,
            email: user.email,
            birthDate: user.birthDate
        }, { 
            where: { cpf: user.cpf } 
        });
    }

    async delete(cpf) {
        return await Users.destroy({
            where: { cpf: cpf }
        });
    }
}