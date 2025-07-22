export default (req, res, next) => {
    // Verifica se os campos obrigatórios estão presentes no corpo da requisição
    const { cpf, name, email } = req.body;
    if (!cpf)
        return res.status(400).json({ error: "CPF é obrigatório" });
    if (!name)
        return res.status(400).json({ error: "Nome é obrigatório" });
    if (!email)
        return res.status(400).json({ error: "Email é obrigatório" });
    next();
}