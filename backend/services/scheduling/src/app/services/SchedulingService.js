import SchedulingRepository from "../repositories/SchedulingRepository.js";
import { cnpj, cpf } from "cpf-cnpj-validator";

export default new class SchedulingService {
    async findAll() {
        return await SchedulingRepository.findAll();
    }

    async findById(id) {
        return await SchedulingRepository.findById(id);
    }

    async findByUserCpf(userCpf) {
        // Format CPF
        userCpf = cpf.format(userCpf);

        // Fetch all schedulings
        const schedulings = await SchedulingRepository.findByUserCpf(userCpf);

        // Check if any scheduling exists for the provided CPF
        if (!schedulings)
            throw new Error("Nenhum agendamento encontrado para o CPF fornecido");
        
        // Return the list of schedulings
        return await SchedulingRepository.findByUserCpf(userCpf);
    }

    async findByProfessionalCpf(professionalCpf) {
        // Format CPF
        professionalCpf = cpf.format(professionalCpf);

        // Fetch all schedulings
        const date = new Date().toISOString().split('T')[0]
        const schedulings = await SchedulingRepository.findByProfessionalCpf(professionalCpf, date);        

        // Check if any scheduling exists for the provided CPF
        if (!schedulings)
            throw new Error("Nenhum agendamento encontrado para o CPF fornecido");
        
        // Return the list of schedulings
        return await SchedulingRepository.findByProfessionalCpf(professionalCpf, date);
    }

    async create(scheduling) {
        // Validate CPF and CNPJ
        if (!scheduling.professionalCpf || !cpf.isValid(scheduling.professionalCpf))
            throw new Error("CPF do profissional inválido");

        if (!scheduling.userCpf || !cpf.isValid(scheduling.userCpf))
            throw new Error("CPF do usuário inválido");

        if (!scheduling.ubsCnpj || !cnpj.isValid(scheduling.ubsCnpj))
            throw new Error("CNPJ da UBS inválido");

        // Validate CPF and CNPJ formats
        scheduling.professionalCpf = cpf.format(scheduling.professionalCpf);
        scheduling.userCpf = cpf.format(scheduling.userCpf);
        scheduling.ubsCnpj = cnpj.format(scheduling.ubsCnpj);
        
        return await SchedulingRepository.create(scheduling);
    }

    async update(scheduling) {
        return await SchedulingRepository.update(scheduling);
    }

    async delete(id) {
        return await SchedulingRepository.delete(id);
    }

    async confirmSchedule(scheduling) {
        scheduling.status = "Confirmado"
        return await SchedulingRepository.updateStatus(scheduling)
    }

    async cancelSchedule(scheduling) {
        scheduling.status = "Cancelado"
        return await SchedulingRepository.updateStatus(scheduling)
    }
}