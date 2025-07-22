import UbsService from "../app/services/UbsService.js";
import { cnpj } from "cpf-cnpj-validator";

export default async () => {
    try {
        await UbsService.createUbs({
            cnpj: cnpj.generate(),
            name: "UBS Central",
            street: "Rua Principal",
            number: "100",
            neighborhood: "Centro",
            city: "São Paulo",
            state: "SP",
            zipCode: "01000-000"
        });
    } catch (error) {
        console.error("Error creating UBS:", error.message);
    }
}