import { publicRequest } from '@src/hooks/requestMethods'
import { CreateAppointmentReqType } from '@src/types/appointment'

// 개인회원의 유기견 입양 약속 등록
export const createAppointment = async (
  createAppointmentReq: CreateAppointmentReqType,
) => {
  return publicRequest
    .put(`/adopt-dogs/appointment`, createAppointmentReq)
    .then(res => res.data)
}
