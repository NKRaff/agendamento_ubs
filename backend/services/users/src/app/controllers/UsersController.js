import UsersService from "../services/UsersService.js";

export default new class UsersController {
    async createUser(req, res) {
        try {
            const user = await UsersService.createUser(req.body);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await UsersService.updateUser(req.body);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await UsersService.deleteUser(req.body.cpf);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findAllUsers(req, res) {
        try {
            const users = await UsersService.findAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar usuários" });
        }
    }

    async findUserByCpf(req, res) {
        try {
            const user = await UsersService.findUserByCpf(req.body.cpf);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}