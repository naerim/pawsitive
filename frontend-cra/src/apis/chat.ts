import { publicRequest } from '@hooks/requestMethods'

export const createRoom = async () => {
  const res = await publicRequest.post('/chatrooms')
  return res.data
}

export const getChatRoomList = async (userNo: number) => {
  const res = await publicRequest.get(`/chatrooms?userNo=${userNo}`)
  return res.data
}
