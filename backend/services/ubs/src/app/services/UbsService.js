import UbsRepository from "../repositories/UbsRepository.js";
import { cnpj } from "cpf-cnpj-validator";

export default new class UbsService {
    async createUbs(data) {
        // CNPJ format
        data.cnpj = cnpj.format(data.cnpj);

        // Check if the UBS already exists
        const existingUbs = await UbsRepository.findByCnpj(data.cnpj);
        if (existingUbs)
            throw new Error("UBS já cadastrada com este CNPJ");


        // Create the UBS
        return await UbsRepository.create(data);
    }

    async findAll() {
        return await UbsRepository.findAll();
    }

    async findByCnpj(cnpjValue) {
        // Validate CNPJ format
        const formattedCnpj = cnpj.format(cnpjValue);
        return await UbsRepository.findByCnpj(formattedCnpj);
    }

}