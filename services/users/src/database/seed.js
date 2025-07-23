import UsersService from "../app/services/UsersService.js";

export default async () => {
    try {
        await UsersService.createUser({
            cpf: "242.385.310-60",
            name: "Carlos Silva",
            email: "carlos.silva@gmail.com",
            birthDate: "1985-06-15",
        });

        await UsersService.createUser({
            cpf: "341.192.580-92",
            name: "Ana Paula Mendes",
            email: "ana.mendes@yahoo.com.br",
            birthDate: "1992-11-23",
        });

        await UsersService.createUser({
            cpf: "478.796.100-49",
            name: "Roberto Lima",
            email: "roberto.lima@outlook.com",
            birthDate: "1980-03-10",
        });

        await UsersService.createUser({
            cpf: "042.151.350-01",
            name: "Mariana Oliveira",
            email: "mariana.oliveira@gmail.com",
            birthDate: "1995-09-30",
        });

        await UsersService.createUser({
            cpf: "161.530.820-25",
            name: "Fernando Souza",
            email: "fernando.souza@bol.com.br",
            birthDate: "1978-12-05",
        });
        
    } catch (error) {
        console.error("Error creating user:", error.message);
    }
}