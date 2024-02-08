import axios from 'axios'

axios.defaults.withCredentials = true

const BASE_URL = 'https://i10c111.p.ssafy.io/api/v1'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})