import { publicRequest } from '@src/hooks/requestMethods'
import { ModData } from '@src/types/components/AdoptedDogType'

export const fetchAdoptedDogDetail = async (num: number) => {
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
