import { publicRequest } from '@src/hooks/requestMethods'
import { ChatRoomType } from '@src/types/chatType' // 현재 사용자 채팅 리스트 전체 조회

// 현재 사용자 채팅 리스트 전체 조회
export const fetchChatRooms = async (
  userNo: number,
): Promise<ChatRoomType[]> => {
  return publicRequest.get(`/chatrooms?userNo=${userNo}`).then(res => res.data)
}
