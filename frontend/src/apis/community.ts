import { publicRequest } from '@src/hooks/requestMethods' // import { CommunityItemType } from '@src/types/components/CommunityType'
// import { CommunityItemType } from '@src/types/components/CommunityType'

export const fetchCommunityList = async () => {
  return publicRequest.get('/api/v1/community').then(res => res.data)
}

export const fetchCommunityDetail = async (num: number) => {
  return publicRequest.get(`/api/v1/community/${num}`).then(res => res.data)
}
