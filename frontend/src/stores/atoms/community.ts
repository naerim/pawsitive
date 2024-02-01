import { atom } from 'jotai'
import { CommunityListType } from '@src/types/components/CommunityType'

export const CommunityListAtom = atom<CommunityListType[]>([])
// export const CommunityDetailAtom = atom<CommunityItemType | null>(null)
