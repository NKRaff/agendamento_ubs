import { cpf } from 'cpf-cnpj-validator'

export default (req, res, next) => {
    if(!cpf.isValid(req.body.cpf))
        return res.status(400).json({ error: "cpf invalido" })
    next()
}