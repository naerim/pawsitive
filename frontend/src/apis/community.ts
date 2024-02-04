import { publicRequest } from '@src/hooks/requestMethods'
import { CommunityItemType } from '@src/types/components/CommunityType.ts'
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
  setCommunityList: React.Dispatch<React.SetStateAction<CommunityItemType[]>>,
): Promise<void> => {
  return publicRequest.get('/community').then(res => {
    res.data
    setCommunityList(res.data.content)
  })
}

export const fetchCommunityByFilter = async (
  num: number,
  setCommunityList: any,
) => {
  return publicRequest
    .get(`/community?categoryNo=${num}`)
    .then(res => {
      res.data
      setCommunityList(res.data.content)
    })
    .catch(error => {
      console.log(error)
    })
}
