import createAxiosInstance from '../../config/axiosInstance.js'
import dotenv from 'dotenv'

dotenv.config()

export default new class UsersGateway {

    async createUser(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.USERS_SERVICE_URL}/users`, data)
        return response.data
    }

    async updateUser(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.put(`${process.env.USERS_SERVICE_URL}/users`, data)
        return response.data
    }

    async deleteUser(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.delete(`${process.env.USERS_SERVICE_URL}/users`, data)
        return response.data
    }

    async findAllUsers(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.get(`${process.env.USERS_SERVICE_URL}/users`, data)
        return response.data
    }
    
    async findUserByCpf(data, token) {
        const axios = createAxiosInstance(token)
        const response = await axios.post(`${process.env.USERS_SERVICE_URL}/users/findByCpf`, data)
        return response.data
    }

}