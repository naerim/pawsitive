import axios from 'axios'

const BASE_URL = 'https://i10c111.p.ssafy.io'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
