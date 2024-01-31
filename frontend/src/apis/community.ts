import { publicRequest } from '@src/hooks/requestMethods'
import { CommunityItemType } from '@src/types/components/CommunityType'

export const fetchCommunityList = async (): Promise<CommunityItemType[]> => {
  const response = await publicRequest.get('api/v1/community')
  return response.data
}

export const fetchCommunityDetail = async (
  num: number,
): Promise<CommunityItemType[]> => {
  // async 함수 내에서는 await을 사용하여 비동기 작업을 기다려야 합니다.
  const response = await publicRequest.get(`/api/v1/community/${num}`)

  // 반환문을 추가하여 결과를 반환합니다.
  return response.data
}

// 메인페이지 추천 커뮤니티글
export const fetchPopularCommunity = async (
  num: number,
): Promise<CommunityItemType[]> => {
  const res = await publicRequest.get(`/community/recommendation?num=${num}`)
  return res.data
}
