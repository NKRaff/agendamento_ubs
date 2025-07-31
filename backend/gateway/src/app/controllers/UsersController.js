import UsersService from '../services/UsersService.js'

export default new class ProfessionalController {

    async register(req, res) {
        try {
            const token = req.headers.authorization 
            const result = await UsersService.register(req.body, token)
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao cadastrar paciente' })
        }
    }

    async register(req, res) {
        try {
            const token = req.headers.authorization 
            const result = await UsersService.register(req.body, token)
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao cadastrar paciente' })
        }
    }

    async schedules(req, res) {
        try {
            const token = req.headers.authorization 
            const result = await UsersService.schedules(req.body, token)
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar agenda do paciente' })
        }
    }

    async confirmSchedule(req, res) {
        try {
            const token = req.headers.authorization 
            const result = await UsersService.confirmSchedules(req.params, token)
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao confirmar consulta' })
        }
    }

    async cancelSchedule(req, res) {
        try {
            const token = req.headers.authorization 
            const result = await UsersService.cancelSchedules(req.params, token)
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao cancelar consulta' })
        }
    }

}