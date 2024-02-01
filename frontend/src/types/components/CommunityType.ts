export type CommunityItemType = {
  map(
    arg0: (item: any) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode
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
export type CommunityDetailType = {
  board: CommunityItemType
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
  content: CommunityItemType[]
  totalPages: number
  number: number
  previous: boolean
  next: boolean
}

export type CategoryType = {
  communityCategoryNo: number
  communityCategoryName: string
}
