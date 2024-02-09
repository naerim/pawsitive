export type ChatRoomType = {
  chatRoomNo: string
  name: string
  id: string
  lastChat: {
    message: string
    createdAt: string
  }
  memberProfileImage: string
  shelterProfileImage: string
}

export type CreateChatRoomParamsType = {
  dogNo: number
  userNo: number
}
