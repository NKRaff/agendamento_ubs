import UsersRepository from "../repositories/UsersRepository.js";
import { cpf } from 'cpf-cnpj-validator';

export default new class UsersService {
    async createUser(data) {
        data.cpf = cpf.format(data.cpf)
        // Check if the user already exists
        const existingUser = await UsersRepository.findByCpf(data.cpf);
        if (existingUser) {
            throw new Error("Usuário já cadastrado com este CPF");
        }
        // Validate required fields
        if (!data.name || !data.email) {
            throw new Error("Nome e email são obrigatórios");
        }
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            throw new Error("Email inválido");
        }
        // Validate birth date format
        if (data.birthDate && isNaN(Date.parse(data.birthDate))) {
            throw new Error("Data de nascimento inválida");
        }
        // Check if the email is already in use
        const emailExists = await UsersRepository.findByEmail(data.email);
        if (emailExists) {
            throw new Error("Email já cadastrado");
        }
        // Create the user
        return await UsersRepository.create(data);
    }

    async updateUser(data) {
        data.cpf = cpf.format(data.cpf)
        // Check if the user exists
        const existingUser = await UsersRepository.findByCpf(data.cpf);
        if (!existingUser) {
            throw new Error("Usuário não encontrado");
        }
        // Validate required fields
        if (!data.name || !data.email) {
            throw new Error("Nome e email são obrigatórios");
        }
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            throw new Error("Email inválido");
        }
        // Validate birth date format
        if (data.birthDate && isNaN(Date.parse(data.birthDate))) {
            throw new Error("Data de nascimento inválida");
        }
        // Check if the email is already in use
        const emailExists = await UsersRepository.findByEmail(data.email);
        if (emailExists) {
            throw new Error("Email já cadastrado");
        }
        
        // Update the user
        return await UsersRepository.update(data);
    }

    async deleteUser(cpfUser) {
        cpfUser = cpf.format(cpfUser)
        // Check if the user exists
        const existingUser = await UsersRepository.findByCpf(cpfUser);
        if (!existingUser) {
            throw new Error("Usuário não encontrado");
        }
        
        // Delete the user
        return await UsersRepository.delete(cpfUser);
    }

    async findAllUsers() {
        // Retrieve all users  
        return await UsersRepository.findAll();
    }

    async findUserByCpf(cpfUser) {
        cpfUser = cpf.format(cpfUser)
        
        // Check if the user exists
        const existingUser = await UsersRepository.findByCpf(cpfUser);
        if (!existingUser) {
            throw new Error("Usuário não encontrado");
        }
        // Return the user
        return existingUser;
    }
    
}