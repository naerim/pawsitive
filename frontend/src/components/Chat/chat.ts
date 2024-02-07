import { publicRequest } from '@src/hooks/requestMethods'

export const createRoom = async () => {
  const res = await publicRequest.post('/chatrooms')
  return res.data
}

export const getRoomList = async (userNo: number) => {
  const res = await publicRequest.get(`/chatrooms?userNo=${userNo}`)
  console.log("res", res)
  return res.data
}
