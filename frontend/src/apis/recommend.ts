import { publicRequest } from '@src/hooks/requestMethods'

export const fetchDogRecommend = async (userId: string) => {
  return publicRequest
    .get(`/api/v1/dog/recommend/${userId}`)
    .then(res => res.data)
}
