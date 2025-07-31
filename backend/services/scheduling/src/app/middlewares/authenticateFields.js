export default function authenticateFields(req, res, next) {
    // Verifica se os campos obrigatórios estão presentes no corpo da requisição
    const { professionalCpf, userCpf, ubsCnpj, date } = req.body;
    if (!professionalCpf)
        return res.status(400).json({ error: "CPF do profissional é obrigatório" });
    if (!userCpf)
        return res.status(400).json({ error: "CPF do paciente é obrigatório" });
    if (!ubsCnpj)
        return res.status(400).json({ error: "CNPJ da UBS é obrigatório" });
    if (!date)
        return res.status(400).json({ error: "Data é obrigatório" });
    next();
}