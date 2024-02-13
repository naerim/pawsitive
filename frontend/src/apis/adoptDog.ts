import { publicRequest } from '@src/hooks/requestMethods'
import {
  AdoptedDog,
  ModData,
  ShelterAdoptionReqType,
} from '@src/types/components/AdoptedDogType'

export const fetchAdoptedDogDetail = async (
  num: number,
): Promise<AdoptedDog> => {
  return publicRequest
    .get(`/adopt-dogs/users/${num}`)
    .then(res => res.data)
    .catch(error => {
      throw new Error(error)
    })
}

// 반려견 정보 수정
export const fetchAdoptedDogMod = async (modData: ModData) => {
  return publicRequest
    .put(`/adopt-dogs/${modData.adoptDogNo}`, modData.fetchData)
    .then(res => res.data)
    .catch(error => {
      throw new Error(error)
    })
}

// 보호소의 유기견 입양 등록
export const registerShelterAdoption = async (
  shelterAdoptionReq: ShelterAdoptionReqType,
) => {
  return publicRequest
    .post(`/shelter/adopt-dogs`, shelterAdoptionReq)
    .then(res => res.data)
    .catch(error => {
      throw new Error(error)
    })
}
