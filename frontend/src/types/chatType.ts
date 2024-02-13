import React from 'react'

// 메세지 타입
export type MessageType = {
  chatNo: number
  createdAt: string
  isRead: boolean
  message: string
  type: string | null
  userImage: string | null
  userName: string
  userNo: number
}

export type ChattingRoomInfoType = {
  dog: {
    age: number
    image: string
    isNeutralized: boolean
    kind: string
    name: string
    sex: string
  }
  member: {
    image: string | null
    name: string
    userNo: number
  }
  promise: {
    date: string
    isAccepted: boolean | null
    time: string
  }
  shelter: {
    image: string | null
    name: string
    userNo: number
  }
}

export type ChattingRoomHeaderType = {
  onOpenCreateAppointmentModal: () => void
  onOpenConfirmAppointmentModal: () => void
} & ChattingRoomInfoType

// 채팅방 타입
export type ChatRoomType = {
  chatList: MessageType[]
  chatRoomId: string
} & ChattingRoomInfoType

// 채팅리스트 아이템 타입
export type ChattingListItemType = {
  chatRoomNo: number
  dogNo: number
  id: string
  isPromiseAccepted: boolean | null
  lastChat: {
    message: string
    createdAt: string
  }
  memberProfileImage: string | null
  name: string
  promiseCreatedAt: string | null
  shelterProfileImage: string | null
  dogName: string
  memberNo: number
  memberName: string
}

export type CreateChatRoomParamsType = {
  dogNo: number
  userNo: number
}

export type ChattingInputSectionType = {
  onClick: () => void
  message: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
