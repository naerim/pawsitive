import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
