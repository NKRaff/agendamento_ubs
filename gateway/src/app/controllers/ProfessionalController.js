import ProfessionalService from '../services/ProfessionalService.js'

export default new class ProfessionalController {

    async register(req, res) {
        try {
            const token = req.headers.authorization 
            const result = await ProfessionalService.register(req.body, token)
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao cadastrar profissional' })
        }
    }

    async dailySchedule(req, res) {
        try {
            const token = req.headers.authorization 
            const result = await ProfessionalService.dailySchedule(req.body, token)
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar agenda do profissional' })
        }
    }

}