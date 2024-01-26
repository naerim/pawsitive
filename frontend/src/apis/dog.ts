import { publicRequest } from '@src/hooks/requestMethods.tsx'

export const fetchDogDetails = async (num: number) => {
  return publicRequest.get(`/api/v1/dog/${num}`).then(res => res.data)
}
