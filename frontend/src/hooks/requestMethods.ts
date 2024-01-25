import axios from 'axios'

const BASE_URL = 'http://i10c111.p.ssafy.io:50001'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})
