import SchedulingService from "../app/services/SchedulingService.js";
import { cpf, cnpj } from "cpf-cnpj-validator";

export default async () => {
    try {
        // Example of creating a scheduling entry
        await SchedulingService.create({
            professionalCpf: cpf.generate(),
            userCpf: cpf.generate(),
            ubsCnpj: cnpj.generate(),
            date: "2025-07-22"
        });
    } catch (error) {
        console.error("Erro ao criar agendamento:", error.message);
    }
}