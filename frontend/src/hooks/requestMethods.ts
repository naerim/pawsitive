import axios from 'axios'

const BASE_URL = 'http://localhost:50000'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
