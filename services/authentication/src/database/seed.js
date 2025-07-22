import AuthService from "../app/services/AuthService.js";

export default async () => {
    try {
        await AuthService.createAuth({
            cpf: "20808022083",
            rule: "Admin",
            password: "1234"
        })
    } catch (error) {
        return {error: error.message}
    }
}