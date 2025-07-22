import createAxiosInstance from '../../config/axiosInstance.js'
import dotenv from 'dotenv'

dotenv.config()

export default new class SchedulingGateway {

    async createScheduling(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.SCHEDULING_SERVICE_URL}/scheduling`, data)
        return response.data
    }

    async findAllScheduling(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.get(`${process.env.SCHEDULING_SERVICE_URL}/scheduling`, data)
        return response.data
    }

    async findSchedulingById(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.SCHEDULING_SERVICE_URL}/scheduling/id`, data)
        return response.data
    }

    async findSchedulingByUserCpf(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.SCHEDULING_SERVICE_URL}/scheduling/user`, data)
        return response.data
    }

    async findSchedulingByUserCpf(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.SCHEDULING_SERVICE_URL}/scheduling/professional`, data)
        return response.data
    }

}