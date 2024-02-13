import { publicRequest } from '@src/hooks/requestMethods'
import { BasicDogType } from '@src/types/dogType'

export const fetchDogRecommend = (num: number): Promise<BasicDogType> => {
  return publicRequest
    .get(`/dogs/recommendation?userNo=${num}`)
    .then(res => res.data)
    .catch(error => {
      throw new Error(error)
    })
}
