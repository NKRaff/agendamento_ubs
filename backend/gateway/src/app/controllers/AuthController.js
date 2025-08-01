import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

export default new class AuthController {
    
    async login(req, res) {
        try {
            const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/login`, req.body)
            return res.status(200).json(response.data)
        } catch (error) {
            return res.status(500).json({mensage: 'Erro ao se comunicar com o serviço de autenticação'})
        }
    }

    async createAuth(req, res) {
        try {
            const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/create`, req.body)
            return res.status(201).json(response.data)
        } catch (error) {
            return res.status(500).json({mensage: 'Erro ao se comunicar com o serviço de autenticação'})
        }
    }
}