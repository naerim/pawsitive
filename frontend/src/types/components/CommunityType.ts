export type CommunityItemType = {
  board: {
    boardNo: number
    memberEmail: string
    memberName: string
    title: string
    content: string
    image: string
    isPublic: boolean
    latitude: number
    longitude: number
    createdAt: string
    hit: number
    communityCategoryNo: number
    communityCategoryName: string
  }
  comments: {
    memberEmail: string
    memberName: string
    content: string
    createdAt: string
  }
}

export type CategoryType = {
  communityCategoryNo: number
  communityCategoryName: string
}

// export type CommunityListType = {
//   boardNo: number
//   memberName: string
//   title: string
//   content: string
//   image: string
//   isPublic: boolean
//   latitude: number
//   longitude: number
//   createdAt: string
//   hit: number
//   communityCategoryNo: number
//   communityCategoryName: string
// }
