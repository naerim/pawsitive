import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ChatRoomType } from '@src/types/chatType'
import { createChatRoom, fetchChatRooms } from '@src/apis/chat'
import { useNavigate } from 'react-router-dom'

export type IChatDetail = {
  message: string
}

const ChattingContainer = () => {
  const [user] = useAtom(userAtom)
  const navigate = useNavigate()

  const { data, isLoading } = useQuery<ChatRoomType[]>({
    queryKey: ['fetchChatRooms'],
    queryFn: () => fetchChatRooms(user.userNo),
  })

  const { mutate } = useMutation({
    mutationKey: ['createChatRoom'],
    mutationFn: createChatRoom,
  })

  const createRoomButton = () => mutate({ userNo: user.userNo, dogNo: 6 })

  const goChatRoom = (id: string) => navigate(`/chat/${id}`)

  return (
    <div>
      <p>{user.name}님의 채팅방 목록</p>
      <button type="button" onClick={createRoomButton}>
        채팅방 만들기
      </button>
      {!isLoading &&
        data &&
        data.map(item => (
          <div
            key={item.chatRoomNo}
            style={{ marginBottom: 40, backgroundColor: 'red' }}
            onClick={() => goChatRoom(item.chatRoomNo)}
          >
            <p>{item.chatRoomNo}번 방</p>
            <div>{item.name}</div>
            <div>유기견 번호 - {item.dogNo}</div>
          </div>
        ))}
    </div>
  )
}

export default ChattingContainer
