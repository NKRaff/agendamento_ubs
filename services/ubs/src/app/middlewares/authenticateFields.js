export default (req, res, next) => {
    // Check if required fields are present in the request body
    const { cnpj, name, street, number, neighborhood, city, state, zipCode } = req.body;
    
    if (!cnpj)
        return res.status(400).json({ error: "CNPJ é obrigatório" });
    if (!name)
        return res.status(400).json({ error: "Nome é obrigatório" });
    if (!street)
        return res.status(400).json({ error: "Rua é obrigatória" });
    if (!number)
        return res.status(400).json({ error: "Número é obrigatório" });
    if (!neighborhood)
        return res.status(400).json({ error: "Bairro é obrigatório" });
    if (!city)
        return res.status(400).json({ error: "Cidade é obrigatória" });
    if (!state)
        return res.status(400).json({ error: "Estado é obrigatório" });
    if (!zipCode)
        return res.status(400).json({ error: "CEP é obrigatório" });

    next();
}