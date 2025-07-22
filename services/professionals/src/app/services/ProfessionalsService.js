import ProfessionalRepository from "../repositories/ProfessionalRepository.js"

export default new class ProfessionalsService {
    async createProfessional(data) {
        // Check if the professional already exists
        const existingProfessional = await ProfessionalRepository.findByCpf(data.cpf)
        if (existingProfessional) {
            throw new Error("Profissional já cadastrado com este CPF")
        }

        // Create the professional
        data.rule = 'Profissional' // Set default rule for professionals
        return await ProfessionalRepository.create(data)
    }

    async updateProfessional(data) {
        // Check if the professional exists
        const existingProfessional = await ProfessionalRepository.findByCpf(data.professionalCpf)
        if (!existingProfessional) {
            throw new Error("Profissional não encontrado")
        }
        // Update the professional
        return await ProfessionalRepository.update(data)
    }

    async deleteProfessional(data) {
        // Check if the professional exists
        const existingProfessional = await ProfessionalRepository.findByCpf(data)
        if (!existingProfessional) {
            throw new Error("Profissional não encontrado")
        }
        // Delete the professional
             
        return await ProfessionalRepository.delete(data)
    }

    async findByCpf(data) {
        const existingProfessional = await ProfessionalRepository.findByCpf(data.cpf)
        if (!existingProfessional) {
            throw new Error("Profissional não encontrado")
        }

        return await ProfessionalRepository.findByCpf(data.cpf)
    }

    async findAll() {
        return await ProfessionalRepository.findAll()
    }

}