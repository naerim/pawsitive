import { atom } from 'jotai'
import { CommunityItemType } from '@src/types/components/CommunityType'

const emptyCommunityItem: CommunityItemType = {
  board: {
    boardNo: 0,
    memberEmail: '',
    memberName: '',
    title: '',
    content: '',
    image: '',
    isPublic: false,
    latitude: 0,
    longitude: 0,
    createdAt: '',
    hit: 0,
    communityCategoryNo: 0,
    communityCategoryName: '',
  },
  comments: {
    memberEmail: '',
    memberName: '',
    content: '',
    createdAt: '',
  },
}

export const CommunityListAtom = atom<CommunityItemType[]>([emptyCommunityItem])
export const CommunityDetailAtom = atom<CommunityItemType>(emptyCommunityItem)
