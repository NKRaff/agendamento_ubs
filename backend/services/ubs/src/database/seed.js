import UbsService from "../app/services/UbsService.js";

export default async () => {
    try {
        await UbsService.createUbs({
            cnpj: "77.462.274/0001-27",
            name: "UBS Norte",
            street: "Avenida dos Imigrantes",
            number: "200",
            neighborhood: "Jardim América",
            city: "São Paulo",
            state: "SP",
            zipCode: "02000-000"
        });

        await UbsService.createUbs({
            cnpj: "70.581.276/0001-96",
            name: "UBS Sul",
            street: "Rua das Palmeiras",
            number: "350",
            neighborhood: "Vila Mariana",
            city: "São Paulo",
            state: "SP",
            zipCode: "04000-000"
        });

        await UbsService.createUbs({
            cnpj: "50.073.340/0001-10",
            name: "UBS Leste",
            street: "Rua do Progresso",
            number: "410",
            neighborhood: "Itaquera",
            city: "São Paulo",
            state: "SP",
            zipCode: "08200-000"
        });

        await UbsService.createUbs({
            cnpj: "36.317.843/0001-63",
            name: "UBS Oeste",
            street: "Avenida Brasil",
            number: "515",
            neighborhood: "Butantã",
            city: "São Paulo",
            state: "SP",
            zipCode: "05500-000"
        });

    } catch (error) {
        console.error("Error creating UBS:", error.message);
    }
}