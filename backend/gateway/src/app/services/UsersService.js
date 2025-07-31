import UsersGateway from '../gateways/UsersGateway.js'
import AuthGateway from '../gateways/AuthGateway.js'
import ProfessionalGateway from '../gateways/ProfessionalGateway.js'
import SchedulingGateway from '../gateways/SchedulingGateway.js'
import UbsGateway from '../gateways/UbsGateway.js'

export default new class UsersService {

    async register(data, token) {
        const { cpf, name, email, birthDate, password } = data
        const rule = "Paciente"

        let paciente, login, tokenResponse

        // Criar um profissional pelo microserviço de professionals
        try {
            paciente = await UsersGateway.createUser({
                cpf, name, email, birthDate
            }, token)
        } catch (error) {
            throw new Error('Erro ao criar paciente: ' + err.message)
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

    async schedules(data, token) {
        const { userCpf } = data

        try {
            const schedules = await SchedulingGateway.findSchedulingByUserCpf({ userCpf }, token)
            
            const results = await Promise.all(schedules.map(async (schedule) => {
                const cpf = schedule.professionalCpf
                const professinal = await ProfessionalGateway.findProfessionalByCpf({ cpf }, token)

                return {
                    nameProfessional: professinal.name,
                    specialty: professinal.specialty,
                    ubs: professinal.ubs,
                    date: schedule.date,
                    status: schedule.status,
                }
            }))

            return results

        } catch (err) {
            throw new Error('Erro ao montar lista de agendamentos com usuários: ' + err.message)
        }
    }

    async confirmSchedules(data, token) {
        try {
            
            const { id } = data
            const schedule = await SchedulingGateway.findSchedulingById({ id }, token)
            if(!schedule)
                throw new Error('agendamento não existe')
            
            if(schedule.status != 'Pendente')
                throw new Error('não é possivel agendar! o encontro ja esta ', schedule.status)
            
            const result = await SchedulingGateway.confirmSchadule({ id }, token)
            return result
        } catch (err) {
            throw new Error('Erro ao confimar agendamento: ' + err.message)
        }
    }

    async cancelSchedules(data, token) {
        try {
            const { id } = data
            const schedule = await SchedulingGateway.findSchedulingById({ id }, token)
            
            if(!schedule)
                throw new Error('agendamento não existe')
            if(schedule.status === 'Cancelado')
                throw new Error('não é possivel agendar! o encontro ja esta ', schedule.status)
            
            const result = await SchedulingGateway.cancelSchadule({ id }, token)
            return result
        } catch (err) {
            throw new Error('Erro ao confimar agendamento: ' + err.message)
        }
    }

}