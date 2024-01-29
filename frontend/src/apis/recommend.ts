import { publicRequest } from '@src/hooks/requestMethods'

export const fetchDogRecommend = async (userId: string) => {
  return publicRequest
    .get(`/api/v1/dogs/recommend/${userId}`)
    .then(res => res.data)
}
