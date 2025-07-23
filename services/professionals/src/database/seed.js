import ProfessionalsService from "../app/services/ProfessionalsService.js"
import AvailableTimesService from '../app/services/AvailableTimesService.js'

export default async () => {
    try {
        await ProfessionalsService.createProfessional({
            cpf: "690.517.970-10",
            name: "Dra. Maria Clara Silva",
            email: "maria.clara@ubscentral.com",
            specialty: "Pediátrico",
            ubs: "77.462.274/0001-27"
        });

        await AvailableTimesService.create({
            professionalCpf: "690.517.970-10",
            date: {
                week: ["Segunda", "Quarta", "Sexta"]
            },
            startTime: "08:00",
            endTime: "12:00"
        });

        await ProfessionalsService.createProfessional({
            cpf: "594.981.570-06",
            name: "Dr. Pedro Henrique Costa",
            email: "pedro.costa@ubsnorte.com",
            specialty: "Ortopédico",
            ubs: "70.581.276/0001-96"
        });

        await AvailableTimesService.create({
            professionalCpf: "594.981.570-06",
            date: {
                week: ["Terça", "Quinta"]
            },
            startTime: "13:00",
            endTime: "17:00"
        });

        await ProfessionalsService.createProfessional({
            cpf: "196.243.540-73",
            name: "Dra. Luana Pereira",
            email: "luana.pereira@ubssul.com",
            specialty: "Dermatologista",
            ubs: "50.073.340/0001-10"
        });

        await AvailableTimesService.create({
            professionalCpf: "196.243.540-73",
            date: {
                week: ["Segunda", "Terça", "Sábado"]
            },
            startTime: "09:00",
            endTime: "14:00"
        });

        await ProfessionalsService.createProfessional({
            cpf: "865.875.750-13",
            name: "Dr. Marcos Vinícius Rocha",
            email: "marcos.rocha@ubscentral.com",
            specialty: "Clínico Geral",
            ubs: "36.317.843/0001-63"
        });

        await AvailableTimesService.create({
            professionalCpf: "865.875.750-13",
            date: {
                week: ["Quarta", "Sexta"]
            },
            startTime: "10:00",
            endTime: "15:00"
        });

        await ProfessionalsService.createProfessional({
            cpf: "411.927.510-86",
            name: "Dra. Aline Barbosa",
            email: "aline.barbosa@ubsleste.com",
            specialty: "Cardiologista",
            ubs: "77.462.274/0001-27"
        });

        await AvailableTimesService.create({
            professionalCpf: "411.927.510-86",
            date: {
                week: ["Segunda", "Quinta"]
            },
            startTime: "07:30",
            endTime: "11:30"
        });

    } catch (error) {
        console.error("Error creating professional:", error.message)
    }
}        
            