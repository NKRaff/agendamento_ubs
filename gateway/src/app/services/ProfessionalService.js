import SchedulingGateway from '../gateways/SchedulingGateway.js'
import AuthGateway from '../gateways/AuthGateway.js'
import UsersGateway from '../gateways/UsersGateway.js'

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

    async dailySchedule(data, token) {
        
        const { professionalCpf } = data

        //let schedule
        try {
            const schedules = await SchedulingGateway.findSchedulingByProfessionalCpf({ professionalCpf }, token)
            
            const results = await Promise.all(schedules.map(async (schedule) => {
                const cpf = schedule.userCpf
                
                const user = await UsersGateway.findUserByCpf({ cpf }, token)

                return {
                    date: schedule.date,
                    status: schedule.status,
                    name: user.name,
                    email: user.email,
                    birthday: user.birthday
                }
            }))

            return results

        } catch (err) {
            throw new Error('Erro ao montar lista de agendamentos com usuários: ' + err.message)
        }

    }

}