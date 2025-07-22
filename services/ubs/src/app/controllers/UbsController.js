import UbsService from "../services/UbsService.js";

export default new class UbsController {
    async create(req, res) {
        try {
            const ubs = await UbsService.createUbs(req.body);
            return res.status(201).json(ubs);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const ubsList = await UbsService.findAll();
            return res.status(200).json(ubsList);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar UBSs" });
        }
    }

    async findByCnpj(req, res) {
        try {
            const ubs = await UbsService.findByCnpj(req.body.cnpj);
            if (!ubs) {
                return res.status(404).json({ error: "UBS não encontrada" });
            }
            return res.status(200).json(ubs);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar UBS" });
        }
    }
}