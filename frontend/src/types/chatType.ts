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
  dogNo: number
}

export type CreateChatRoomParamsType = {
  dogNo: number
  userNo: number
}

export type MessageType = {
  chatNo: number
  createdAt: string
  isRead: boolean
  type: string | null
  userImage: string | null
  userNo: number
  message: string
  userName: string
  dogNo: number
}
