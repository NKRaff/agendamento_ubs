import UsersService from "../app/services/UsersService.js";

export default async () => {
    try {
        await UsersService.createUser({
            cpf: "870.800.360-20",
            name: "Jane Doe",
            email: "janedoe@hotmail.com",
            birthDate: "1990-01-01",
        });
    } catch (error) {
        console.error("Error creating user:", error.message);
    }
}