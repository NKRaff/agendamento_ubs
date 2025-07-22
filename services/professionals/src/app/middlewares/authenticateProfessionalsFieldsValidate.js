export default (req, res, next) => {
    // Verifica se os campos obrigatórios estão presentes no corpo da requisição
    const { cpf, name, email, specialty, ubs } = req.body;
    if (!cpf)
        return res.status(400).json({ error: "CPF é obrigatorio" });
    if (!name)
        return res.status(400).json({ error: "Nome é obrigatorio" });
    if (!email)
        return res.status(400).json({ error: "Email é obrigatorio" });
    if (!specialty)
        return res.status(400).json({ error: "Especialidade é obrigatorio" });
    if (!ubs)
        return res.status(400).json({ error: "UBS é obrigatorio" });
    
    next()
}