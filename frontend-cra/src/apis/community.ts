// 메인페이지 추천 커뮤니티글
import { publicRequest } from '@hooks/requestMethods'

export const fetchPopularCommunity = async (num: number) => {
  return publicRequest
    .get(`/community/recommendation?num=${num}`)
    .then(res => res.data)
}
