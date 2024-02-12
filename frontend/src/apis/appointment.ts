import { publicRequest } from '@src/hooks/requestMethods'
import { AppointmentReqType } from '@src/types/appointment'

// 개인회원의 유기견 입양약속 등록
export const createAppointment = async (
  createAppointmentReq: AppointmentReqType,
) => {
  return publicRequest
    .put(`/adopt-dogs/appointment`, createAppointmentReq)
    .then(res => res.data)
}

// 보호소회원이 유기견 입양약속 수락
export const acceptAppointment = async (
  acceptAppointmentReq: AppointmentReqType,
) => {
  return publicRequest
    .put(`/shelter/adopt-dogs/appointment`, acceptAppointmentReq)
    .then(res => res.data)
}
