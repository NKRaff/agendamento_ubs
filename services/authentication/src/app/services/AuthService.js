import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import { cpf } from 'cpf-cnpj-validator'
import AuthRepository from "../repositories/AuthRepository.js"

dotenv.config()

export default new class AuthService {
    async login({cpf: cpfUser, password}) {
        try {
            const auth = await AuthRepository.findByCpf(cpf.format(cpfUser))
            if(!auth) 
                throw new Error('Usuario não cadastrado')
    
            // Compara senha com hash salvo
            const passwordMatch = await bcrypt.compare(password, auth.password)
            if(!passwordMatch) 
                throw new Error('Senha invalida')
    
            // Gerar token JWT
            const token = jwt.sign(
                {cpf: auth.cpf, role: auth.rule}, 
                process.env.JWT_SECRET, 
                {expiresIn: '1h'}
            )

            const rule = auth.rule
            // Armazena token no Cookie
            return {rule, token}

        } catch (error) {
            return {error: error.message}
        }  
    }

    async createAuth(auth) {
        const { cpf: cpfUser, rule, password } = auth
        
        const authExist = await AuthRepository.findByCpf(cpfUser)
        if(authExist)
            throw new Error('Usuario ja cadastrado')
        
        if(rule !== "Admin" && rule !== "Paciente" && rule !== "Profissional")
            throw new Error('Tipo de usuario invalido')
        
        const passwordHashed = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT))
        const cpfFormat = cpf.format(cpfUser);
        
        return await AuthRepository.create({cpf: cpfFormat , rule, password: passwordHashed})
    }
}