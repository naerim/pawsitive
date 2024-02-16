import { publicRequest } from '@src/hooks/requestMethods'
import {
  BasicDogListParamsType,
  DogListKindParamsType,
  LikeDogsParamsType,
} from '@src/types/dogType'
import queryString from 'query-string'

export const fetchDogDetails = async (dogNo: number, userNo: number) => {
  return publicRequest
    .get(`/dogs/${dogNo}?userNo=${userNo}`)
    .then(res => res.data)
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
export const fetchRecommendDogs = async (useNo: number) => {
  return publicRequest
    .get(`/dogs/recommendation?userNo=${useNo}`)
    .then(res => res.data)
}
export const fetchRecommendDogCard = async (useNo: number) => {
  return publicRequest
    .get(`/dogs/single-recommendation?userNo=${useNo}`)
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
export const fetchSameShelterDogs = async (data: {
  shelterNo: number
  num: number
  status: number
}) => {
  return publicRequest
    .get(
      `/dogs/shelters/${data.shelterNo}?num=${data.num}&status=${data.status}`,
    )
    .then(res => res.data)
    .catch(error => {
      console.log(error)
      throw new Error('같은 보호소 유기견')
    })
}

// 유기견 품종별 리스트 조회
export const fetchKindDogList = async (params: DogListKindParamsType) => {
  return publicRequest
    .get(`/dogs?${queryString.stringify(params)}`)
    .then(res => res.data)
    .catch(error => {
      console.log(error)
      throw new Error('유기견 조회')
    })
}

// 유기견 찜 등록
export const fetchLikeDog = async (params: LikeDogsParamsType) => {
  return publicRequest.post('/dogs/like', params).then(res => res.data)
}

// 유기견 찜 취소
export const fetchUnLikeDog = async (params: LikeDogsParamsType) => {
  return publicRequest.post('/dogs/unlike', params).then(res => res.data)
}

// 찜한 유기견 리스트 전체 조회
export const fetchLikeDogList = async (userNo: number) => {
  return publicRequest.get(`/dogs/like/${userNo}`).then(res => res.data)
}
