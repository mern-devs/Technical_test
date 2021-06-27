import axios from 'axios'
import Config from './config'

const apiInstance = axios.create({
  baseURL: Config.API_URL,
})

export default apiInstance