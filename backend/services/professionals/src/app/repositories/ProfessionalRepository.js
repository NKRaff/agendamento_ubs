import Professional from "../models/Professional.js"

export default new class ProfessionalRepository {
    async findAll() {
        return await Professional.findAll()
    }

    async findByCpf(cpf) {
        return await Professional.findByPk(cpf, {raw: true})
    }

    async findByRule(rule) {
        return await Professional.findAll({where: {rule: rule}, raw: true})
    }

    async findById(id) {
        return await Professional.findByPk(id, {raw: true})
    }
    async create(professional) {
        return await Professional.create(professional)
    }

    async update(professional) {
        return await Professional.update({
            name: professional.name,
            email: professional.email,
            specialty: professional.specialty,
            ubs: professional.ubs,
            rule: professional.rule
        }, { 
            where: {cpf: professional.cpf} 
        })
    }

    async delete(cpf) {
        return await Professional.destroy({
            where: {cpf: cpf}
        })
    }
}