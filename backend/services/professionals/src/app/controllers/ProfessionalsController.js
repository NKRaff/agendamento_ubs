import ProfessionalsService from "../services/ProfessionalsService.js"

export default new class ProfessionalsController {

    async createProfessional(req, res) {
        try {
            const professional = await ProfessionalsService.createProfessional(req.body)
            return res.status(201).json(professional)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    async updateProfessional(req, res) {
        try {
            const professional = await ProfessionalsService.updateProfessional(req.body)
            return res.status(200).json(professional)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    async deleteProfessional(req, res) {
        try {
            await ProfessionalsService.deleteProfessional(req.body.cpf)
            return res.status(204).send()
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    async findProfessionalByCpf(req, res) {       
        try {
            const professional = await ProfessionalsService.findByCpf(req.body)
            return res.status(200).json(professional)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    async findAllProfessional(req, res) {
        try {
            const professional = await ProfessionalsService.findAll()
            return res.status(200).json(professional)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

}