export default (req, res, next) => {
    const { professionalCpf, date, startTime, endTime } = req.body;

    if(!professionalCpf) {
        return res.status(400).json({ error: "CPF do profissional é obrigatório" });
    }
    if(!date) {
        return res.status(400).json({ error: "Data é obrigatória" });
    }
    if(!startTime || !endTime) {
        return res.status(400).json({ error: "Horário de início e fim são obrigatórios" });
    }

    next();
}