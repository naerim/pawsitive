export type CommunityPopularType = {
  boardNo: number
  memberEmail: string
  memberName: string
  title: string
  content: string
  isPublic: boolean
  latitude: number
  longitude: number
  createdAt: string
  hit: number
  communityCategoryNo: number
  communityCategoryName: string
  images: string[]
}

// 디테일은 이거
export type CommunityItemType = {
  board: CommunityPopularType
  comments: {
    boardNo: number
    commentNo: number
    memberEmail: string
    memberName: string
    content: string
    createdAt: string
  }
}

// 커뮤니티 리스트
export type CommunityListType = {
  content: CommunityPopularType[]
  totalPages: number
  number: number
  previous: boolean
  next: boolean
}

export type CategoryType = {
  communityCategoryNo: number
  communityCategoryName: string
}
