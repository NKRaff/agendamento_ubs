import AvailableTimes from "../models/AvailableTimes.js";

export default new class AvailableTimesRepository {
    async findAll() {
        return await AvailableTimes.findAll({ raw: true });
    }

    async findById(id) {
        return await AvailableTimes.findByPk(id, { raw: true });
    }

    async findByCpf(professionalCpf) {
        return await AvailableTimes.findAll({where: {professionalCpf: professionalCpf}, raw: true});
    }

    async create(availableTime) {
        return await AvailableTimes.create(availableTime);
    }

    async update(availableTime) {
        return await AvailableTimes.update({
            date: availableTime.date,
            startTime: availableTime.startTime,
            endTime: availableTime.endTime
        }, {
            where: { professionalCpf: availableTime.professionalCpf }
        });
    }

    async delete(id) {
        return await AvailableTimes.destroy({
            where: { id: id }
        });
    }
}