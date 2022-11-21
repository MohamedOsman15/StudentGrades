import axios from 'axios'
import { DB_URL } from '../global'

const Client = axios.create({ baseURL: DB_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default Client
