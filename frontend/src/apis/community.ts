import { publicRequest } from '@src/hooks/requestMethods'
import { CommunityItemType } from '@src/types/components/CommunityType'

export const fetchCommunityList = async () => {
  return publicRequest.get('/api/v1/community').then(res => res.data)
}

export const fetchCommunityDetail = async (
  num: number,
): Promise<CommunityItemType[]> => {
  // async 함수 내에서는 await을 사용하여 비동기 작업을 기다려야 합니다.
  const response = await publicRequest.get(`/api/v1/community/${num}`)

  // 반환문을 추가하여 결과를 반환합니다.
  return response.data
}
