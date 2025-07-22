import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

export default new class AuthController {
    
    async login(req, res) {
        try {           
            const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/login`, req.body)
            return res.send(response.data)
        } catch (error) {
            return res.status(500).send('Erro ao se comunicar com o serviço de autenticação')
        }
    }

    async createAuth(req, res) {
        try {
            const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/create`, req.body)
            console.log('passou do controller do gateway');
            return res.send(response.data)
        } catch (error) {
            return res.status(500).send('Erro ao se comunicar com o serviço de autenticação')
        }
    }
}