import createAxiosInstance from '../../config/axiosInstance.js'
import dotenv from 'dotenv'

dotenv.config()

export default new class UbsGateway {

    async createUbs(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.UBS_SERVICE_URL}/ubs`, data)
        return response.data
    }

    async findAllUbs(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.get(`${process.env.UBS_SERVICE_URL}/ubs`, data)
        return response.data
    }
    
    async findUbsByCnpj(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.UBS_SERVICE_URL}/ubs/cnpj`, data)
        return response.data
    }
    
}