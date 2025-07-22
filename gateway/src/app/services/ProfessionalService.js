import ProfessionalGateway from '../gateways/ProfessionalGateway.js'
import AuthGateway from '../gateways/AuthGateway.js'

export default new class ProfessionalService {

    async register(data, token) {
        const { cpf, name, email, specialty, ubs, rule, password, date, startTime, endTime } = data

        let profissional, availableTimes, login, tokenResponse

        // Criar um profissional pelo microserviço de professionals
        try {
            profissional = await ProfessionalGateway.createProfessional({
                cpf, name, email, specialty, ubs, rule
            }, token)
        } catch (error) {
            throw new Error('Erro ao criar profissional: ' + err.message)
        }

        // Criar horario para um profissional
        try {
            availableTimes = await ProfessionalGateway.createAvailableTimes({
                professionalCpf: cpf, date, startTime, endTime
            }, token)
        } catch (err) {
            throw new Error('Erro ao criar horários disponíveis: ' + err.message)
        }

        // Criar um login pelo microserviço de authentication
        try {
            login = await AuthGateway.register({ cpf, rule, password })
        } catch (err) {
            throw new Error('Erro ao criar login: ' + err.message)
        }

        // Fazer login pelo microserviço de authentication
        try {
            tokenResponse = await AuthGateway.login({ cpf, password })
        } catch (err) {
            throw new Error('Erro ao fazer login: ' + err.message)
        }

        return tokenResponse
    }

}