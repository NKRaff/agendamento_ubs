import AvailableTimesRepository from "../repositories/AvailableTimesRepository.js";
import ProfessionalRepository from "../repositories/ProfessionalRepository.js";

export default new class AvailableTimesService {
    async findAll() {
        return await AvailableTimesRepository.findAll();
    }

    async findById(id) {
        return await AvailableTimesRepository.findById(id);
    }

    async create(availableTime) {
        // Validate if the professional exists
        const professional = await ProfessionalRepository.findByCpf(availableTime.professionalCpf);
        if (!professional) {
            throw new Error("Profissiional não encontrado");
        }
        // Validate if the start and end times are valid
        const startTime = new Date(`1970-01-01T${availableTime.startTime}:00`);
        const endTime = new Date(`1970-01-01T${availableTime.endTime}:00`);
        if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
            throw new Error("Horário de início ou fim inválido");
        }
        // Create the available time in the repository
        return await AvailableTimesRepository.create(availableTime);
    }

    async update(availableTime) {
        return await AvailableTimesRepository.update(availableTime);
    }

    async delete(id) {
        return await AvailableTimesRepository.delete(id);
    }

    async findByProfessionalCpf(cpf) {
        return await AvailableTimesRepository.findByCpf(cpf);
    }
}