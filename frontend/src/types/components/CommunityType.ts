export type CommunityItemType = {
  boardNo: number
  memberEmail: string
  memberName: string
  title: string
  content: string
  images: string[]
  isPublic: boolean
  latitude: number
  longitude: number
  createdAt: string
  hit: number
  communityCategoryNo: number
  communityCategoryName: string
}

export type CategoryType = {
  communityCategoryNo: number
  communityCategoryName: string
}
