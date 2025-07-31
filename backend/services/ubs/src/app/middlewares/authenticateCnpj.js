import { cnpj } from 'cpf-cnpj-validator'

export default function authenticateCnpj (req, res, next) {
    if(!cnpj.isValid(req.body.cnpj))
        return res.status(400).json({ error: "cnpj invalido" })
    next()
}