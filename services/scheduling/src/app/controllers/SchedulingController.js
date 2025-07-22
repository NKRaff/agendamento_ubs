import SchedulingService from "../services/SchedulingService.js";

export default new class SchedulingController {
    async findAll(req, res) {
        try {
            const schedulings = await SchedulingService.findAll();
            return res.status(200).json(schedulings);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const scheduling = await SchedulingService.findById(req.body.id);
            if (!scheduling) {
                return res.status(404).json({ error: "Agendamento não encontrado" });
            }
            return res.status(200).json(scheduling);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async findByUserCpf(req, res) {
        try {
            const userCpf = req.body.userCpf;
            const schedulings = await SchedulingService.findByUserCpf(userCpf);
            if (schedulings.length === 0) {
                return res.status(204).json(schedulings);
            }
            return res.status(200).json(schedulings);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async findByProfessionalCpf(req, res) {
        try {
            const professionalCpf = req.body.professionalCpf;
            const schedulings = await SchedulingService.findByProfessionalCpf(professionalCpf);
            if (schedulings.length === 0) {
                return res.status(200).json(schedulings);
            }
            return res.status(200).json(schedulings);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    async create(req, res) {
        try {
            const scheduling = await SchedulingService.create(req.body);
            return res.status(201).json(scheduling);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const updatedScheduling = await SchedulingService.update(req.body);
            return res.status(200).json(updatedScheduling);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await SchedulingService.delete(req.body.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async confirmSchadule(req, res) {
        try {
            const updatedScheduling = await SchedulingService.confirmSchedule(req.body);
            return res.status(200).json(updatedScheduling);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async cancelSchadule(req, res) {
        try {
            const updatedScheduling = await SchedulingService.cancelSchedule(req.body);
            return res.status(200).json(updatedScheduling);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}