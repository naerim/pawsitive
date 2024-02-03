import { atom } from 'jotai'
import { CommunityItemType } from '@src/types/components/CommunityType'

export const CommunityListAtom = atom<CommunityItemType[]>([])

export const CommunityCategoryAtom = atom<number>(0)
