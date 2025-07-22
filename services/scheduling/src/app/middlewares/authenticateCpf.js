import { cpf } from 'cpf-cnpj-validator'

export default function authenticateCpf (req, res, next) {
    if(!cpf.isValid(req.body.userCpf || req.body.professionalCpf))
        return res.status(400).json({ error: "cpf invalido" })
    next()
}