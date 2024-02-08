import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChatRoomType } from '@src/types/chatType'
import { createChatRoom, fetchChatRooms } from '@src/apis/chat'

export type IChatDetail = {
  message: string
}

const ChattingContainer = () => {
  const [user] = useAtom(userAtom)

  const { data, isLoading } = useQuery<ChatRoomType[]>({
    queryKey: ['fetchChatRooms'],
    queryFn: () => fetchChatRooms(user.userNo),
  })

  const { mutate } = useMutation({
    mutationKey: ['createChatRoom'],
    mutationFn: createChatRoom,
  })

  const createRoomButton = () => mutate({ userNo: user.userNo, dogNo: 6 })

  return (
    <div>
      <p>{user.name}님의 채팅방 목록</p>
      {!isLoading &&
        data &&
        data.map(item => (
          <div key={item.chatRoomNo}>
            <p>{item.chatRoomNo}번 방</p>
            <div>{item.name}</div>
            <div>유기견 번호 - {item.dogNo}</div>
          </div>
        ))}
      <button type="button" onClick={createRoomButton}>
        채팅방 만들기
      </button>
    </div>
  )
}

export default ChattingContainer
