import { publicRequest } from '@src/hooks/requestMethods' // import { CommunityItemType } from '@src/types/components/CommunityType'
// import { CommunityItemType } from '@src/types/components/CommunityType'

export const fetchCommunityList = async () => {
  return publicRequest.get('/community').then(res => res.data)
}

export const fetchCommunityDetail = async (num: number) => {
  return publicRequest.get(`/community/${num}`).then(res => res.data)
}

// 메인페이지 추천 커뮤니티글
export const fetchPopularCommunity = async (num: number) => {
  return publicRequest
    .get(`/community/recommendation?num=${num}`)
    .then(res => res.data)
}
