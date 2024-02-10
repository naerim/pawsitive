import { publicRequest } from '@src/hooks/requestMethods'
import { BasicDogListParamsType } from '@src/types/dogType'
import queryString from 'query-string'

export const fetchDogDetails = async (dogNo: number) => {
  return publicRequest.get(`/dogs/${dogNo}`).then(res => res.data)
}

// 유기견 등록
export const createDog = async (data: FormData) => {
  return publicRequest
    .post(`/dogs`, data, {
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

// 유기견 리스트 조회
export const fetchBasicDogList = async (
  basicDogListParams: BasicDogListParamsType,
) => {
  return publicRequest
    .get(`/dogs?${queryString.stringify(basicDogListParams)}`)
    .then(res => res.data)
    .catch(error => {
      console.log(error)
      throw new Error('유기견 조회')
    })
}

// 같은 보호소 유기견 조회
export const fetchSameShelterDogs = async (number: number) => {
  return publicRequest
    .get(`/dogs/shelters/${number}?num=2`)
    .then(res => res.data)
    .catch(error => {
      console.log(error)
      throw new Error('같은 보호소 유기견')
    })
}
