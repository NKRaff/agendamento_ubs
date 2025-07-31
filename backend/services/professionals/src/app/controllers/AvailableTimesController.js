import AvailableTimesService from "../services/AvailableTimesService.js";

export default new class AvailableTimesController {
    async findAll(req, res) {
        try {
            const availableTimes = await AvailableTimesService.findAll();
            return res.status(200).json(availableTimes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const availableTime = await AvailableTimesService.findById(req.body.id);
            if (!availableTime) {
                return res.status(404).json({ error: "Horário não encontrado" });
            }
            return res.status(200).json(availableTime);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const availableTime = await AvailableTimesService.create(req.body);
            return res.status(201).json(availableTime);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updatedAvailableTime = await AvailableTimesService.update(req.body);
            return res.status(200).json(updatedAvailableTime);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await AvailableTimesService.delete(req.body.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findByProfessionalCpf(req, res) {
        try {
            const availableTimes = await AvailableTimesService.findByProfessionalCpf(req.body.cpf);            
            return res.status(200).json(availableTimes);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}