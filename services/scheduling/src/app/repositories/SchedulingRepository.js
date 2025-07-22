import Scheduling from "../models/Scheduling.js";

export default new class SchedulingRepository {
    async findAll() {
        return await Scheduling.findAll();
    }

    async findById(id) {
        return await Scheduling.findByPk(id, { raw: true });
    }

    async findByUserCpf(userCpf) {
        return await Scheduling.findAll({
            where: { userCpf: userCpf },
            raw: true
        });
    }

    async findByProfessionalCpf(professionalCpf, date) {
        return await Scheduling.findAll({
            where: { 
                professionalCpf: professionalCpf,
                date: date
             },
            raw: true
        });
    }

    async create(scheduling) {
        return await Scheduling.create(scheduling);
    }

    async update(scheduling) {
        return await Scheduling.update({
            professionalCpf: scheduling.professionalCpf,
            userCpf: scheduling.userCpf,
            ubsCnpj: scheduling.ubsCnpj,
            date: scheduling.date,
            status: scheduling.status
        }, { 
            where: { id: scheduling.id } 
        });
    }

    async updateStatus(scheduling) {
        return await Scheduling.update({
            status: scheduling.status
        }, { 
            where: { id: scheduling.id } 
        });
    }

    async delete(id) {
        return await Scheduling.destroy({
            where: { id: id }
        });
    }
}