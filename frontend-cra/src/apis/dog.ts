import { publicRequest } from '@hooks/requestMethods'

// 메인 페이지 추천 유기견
export const fetchRecommendDogs = async (num: number) => {
  return publicRequest
    .get(`/dogs/recommendation?num=${num}`)
    .then(res => res.data)
}
