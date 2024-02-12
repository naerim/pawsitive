import { CloseFunctionType } from '@src/types/commonType'

export type AppointmentReqType = {
  userNo: number
  chatRoomNo: number
  date: string
  time: string
}

// 입양약속 생성 타입
export type CreateAppointmentModalType = {
  chatRoomNo: number
  shelterName: string
  dogName: string
} & CloseFunctionType
