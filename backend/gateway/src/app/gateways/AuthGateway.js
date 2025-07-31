import createAxiosInstance from '../../config/axiosInstance.js'
import dotenv from 'dotenv'

dotenv.config()

export default new class AuthGateway {

  async register(data) {
    const axios = createAxiosInstance()
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/create`, data)
    return response.data
  }
  

  async login(data) {
    const axios = createAxiosInstance()
    const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/login`, data)
    return response.data
  }

}