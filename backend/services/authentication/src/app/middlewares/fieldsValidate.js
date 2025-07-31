export default (req, res, next) => {
    const { cpf, password } = req.body
    if(!cpf)
        return res.status(400).json({error: 'Cpf é obrigatorio'})
    else if(!password)
        return res.status(400).json({error: 'Senha é obrigatoria'})
    next()
}