import Auth from "../models/Auth.js"

export default new class AuthRepository {
    async findAll() {
        return await Auth.findAll()
    }

    async findByCpf(cpf) {
        return await Auth.findByPk(cpf, {raw: true})
    }

    async findByRule(rule) {
        return await Auth.findAll({where: {rule: rule}, raw: true})
    }

    async create(auth) {
        return await Auth.create(auth)
    }

    async update(auth) {
        return await Auth.update({
            rule: auth.rule,
            password: auth.password
        }, { 
            where: {cpf: auth.cpf} 
        })
    }

    async delete(cpf) {
        return await Auth.destroy({
            where: {cpf: cpf}
        })
    }
}