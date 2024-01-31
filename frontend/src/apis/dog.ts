import { publicRequest } from '@src/hooks/requestMethods'

export const fetchDogDetails = async (num: number) => {
  return publicRequest.get(`/api/v1/dog/${num}`).then(res => res.data)
}

// 유기견 등록
export const createDog = async (data: FormData) => {
  return publicRequest
    .post(`/api/v1/dogs`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(res => res.data)
}

// 메인 페이지 추천 유기견
export const fetchRecommendDogs = async (num: number) => {
  return publicRequest
    .get(`/dogs/recommendation?num=${num}`)
    .then(res => res.data)
}
