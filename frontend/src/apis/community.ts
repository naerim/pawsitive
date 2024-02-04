import { publicRequest } from '@src/hooks/requestMethods'
import { CommunityListType } from '@src/types/components/CommunityType'
import React from 'react'
// import { CommunityItemType } from '@src/types/components/CommunityType'

export const fetchCommunityDetail = async (num: number) => {
  return publicRequest.get(`/community/${num}`).then(res => res.data)
}

// 메인페이지 추천 커뮤니티글
export const fetchPopularCommunity = async (num: number) => {
  return publicRequest
    .get(`/community/recommendation?num=${num}`)
    .then(res => res.data)
}

export const fetchCommunityList = async (
  setCommunityList: React.Dispatch<React.SetStateAction<CommunityListType[]>>,
): Promise<void> => {
  return publicRequest.get('/community').then(res => {
    setCommunityList(res.data.content)
  })
}

export const fetchCommunityByFilter = async (
  num: number,
  setCommunityList: React.Dispatch<React.SetStateAction<CommunityListType[]>>,
) => {
  return publicRequest
    .get(`/community?categoryNo=${num}`)
    .then(res => {
      setCommunityList(res.data.content)
    })
    .catch(error => {
      console.log(error)
    })
}

export const fetchCommunityCreate = async (createFormData: FormData) => {
  return publicRequest
    .post(`/community`, createFormData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(res => res.data)
    .catch(error => {
      console.log(error)
      throw new Error('로그인 에러')
    })
}
