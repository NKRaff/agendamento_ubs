import AuthService from "../app/services/AuthService.js";

export default async () => {
    try {
        // Admin
        await AuthService.createAuth({
            cpf: "208.080.220-83",
            rule: "Admin",
            password: "admin"
        });

        // Pacientes
        await AuthService.createAuth({
            cpf: "242.385.310-60",
            rule: "Paciente",
            password: "paciente1"
        });

        await AuthService.createAuth({
            cpf: "341.192.580-92",
            rule: "Paciente",
            password: "paciente2"
        });

        await AuthService.createAuth({
            cpf: "478.796.100-49",
            rule: "Paciente",
            password: "paciente3"
        });

        await AuthService.createAuth({
            cpf: "042.151.350-01",
            rule: "Paciente",
            password: "paciente4"
        });

        await AuthService.createAuth({
            cpf: "161.530.820-25",
            rule: "Paciente",
            password: "paciente5"
        });

        // Profissionais
        await AuthService.createAuth({
            cpf: "690.517.970-10",
            rule: "Profissional",
            password: "prof1"
        });

        await AuthService.createAuth({
            cpf: "594.981.570-06",
            rule: "Profissional",
            password: "prof2"
        });

        await AuthService.createAuth({
            cpf: "196.243.540-73",
            rule: "Profissional",
            password: "prof3"
        });

        await AuthService.createAuth({
            cpf: "865.875.750-13",
            rule: "Profissional",
            password: "prof4"
        });

        await AuthService.createAuth({
            cpf: "411.927.510-86",
            rule: "Profissional",
            password: "prof5"
        });

    } catch (error) {
        return {error: error.message}
    }
}