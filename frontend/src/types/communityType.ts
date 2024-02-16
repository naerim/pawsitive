import { Dispatch, SetStateAction } from 'react'

export type CommunityType = {
  boardNo: number
  communityCategoryName: string
  communityCategoryNo: number
  content: string
  createdAt: string
  hit: number
  images: string[]
  isPublic: boolean
  latitude: number
  longitude: number
  memberAddress: string
  memberEmail: string
  memberName: string
  memberStage: number
  title: string
}

export type CommunityListParamsType = {
  page: number
  size: number
  sort: string[]
  categoryNo: number
}

export type CommunityCategoryType = {
  category: number
  setCategory: Dispatch<SetStateAction<number>>
}

export type CommunityResType = {
  content: CommunityType[]
  next: boolean
  number: number
  previous: boolean
  totalPages: number
}
