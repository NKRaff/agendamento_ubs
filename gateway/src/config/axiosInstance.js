import axios from 'axios'

export default function createAxiosInstance(token) {
  return axios.create({
    headers: {
      Authorization: token ? `${token}` : undefined,
      'Content-Type': 'application/json'
    }
  })
}