export type ChatRoomType = {
  chatRoomNo: string
  name: string
  createdAt: string
  dogNo: number
}

export type CreateChatRoomParamsType = {
  dogNo: number
  userNo: number
}
