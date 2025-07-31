import SchedulingService from "../app/services/SchedulingService.js";

export default async () => {
    try {
        await SchedulingService.create({
            professionalCpf: "690.517.970-10",
            userCpf: "242.385.310-60",
            ubsCnpj: "77.462.274/0001-27",
            date: "2025-07-23",
            status: "Pendente"
        });

        await SchedulingService.create({
            professionalCpf: "690.517.970-10",
            userCpf: "341.192.580-92",
            ubsCnpj: "77.462.274/0001-27",
            date: "2025-07-23",
            status: "Cancelado"
        });

        await SchedulingService.create({
            professionalCpf: "690.517.970-10",
            userCpf: "341.192.580-92",
            ubsCnpj: "77.462.274/0001-27",
            date: "2025-07-23",
            status: "Pendente"
        });

        await SchedulingService.create({
            professionalCpf: "690.517.970-10",
            userCpf: "042.151.350-01",
            ubsCnpj: "77.462.274/0001-27",
            date: "2025-07-22",
            status: "Concluído"
        });

        await SchedulingService.create({
            professionalCpf: "690.517.970-10",
            userCpf: "161.530.820-25",
            ubsCnpj: "77.462.274/0001-27",
            date: "2025-07-25",
            status: "Cancelado"
        });

        await SchedulingService.create({
            professionalCpf: "690.517.970-10",
            userCpf: "478.796.100-49",
            ubsCnpj: "77.462.274/0001-27",
            date: "2025-07-23",
            status: "Confirmado"
        });

        await SchedulingService.create({
            professionalCpf: "690.517.970-10",
            userCpf: "242.385.310-60",
            ubsCnpj: "77.462.274/0001-27",
            date: "2025-07-23",
            status: "Confirmado"
        });

    } catch (error) {
        console.error("Erro ao criar agendamento:", error.message);
    }
}