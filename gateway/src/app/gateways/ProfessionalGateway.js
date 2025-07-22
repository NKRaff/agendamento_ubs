import createAxiosInstance from '../../config/axiosInstance.js'
import dotenv from 'dotenv'

dotenv.config()

export default new class ProfessionalGateway {

    // Professionals
    async createProfessional(data, token) {
        const axios = createAxiosInstance(token)       
        const response = await axios.post(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals`, data)
        return response.data
    }

    async updateProfessional(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.put(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals`, data)
        return response.data
    }

    async deleteProfessional(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.delete(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals`, data)
        return response.data
    }

    async findProfessionalByCpf(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals/findByProfessional`, data)
        return response.data
    }

    async findAllProfessional(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.get(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals`, data)
        return response.data
    }

    // AvailableTimes
    async createAvailableTimes(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals/available-times`, data)
        return response.data
    }

    async updateAvailableTimes(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.put(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals/available-times`, data)
        return response.data
    }

    async findByIdAvailableTimes(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals/available-times/id`, data)
        return response.data
    }

    async findAllAvailableTimes(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.get(`${process.env.PROFESSIONALS_SERVICE_URL}/professionals/available-times`, data)
        return response.data
    }

}