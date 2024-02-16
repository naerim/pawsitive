import { publicRequest } from '@src/hooks/requestMethods'
import { BasicDogType } from '@src/types/dogType'

export const fetchMonthlyDogRecommend = (
  num: number,
): Promise<BasicDogType[]> => {
  return publicRequest
    .get(`/dogs/monthly?num=${num}`)
    .then(res => res.data)
    .catch(error => {
      throw new Error(error)
    })
}
