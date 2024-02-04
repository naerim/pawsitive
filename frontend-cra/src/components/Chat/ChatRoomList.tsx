import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getChatRoomList } from '@apis/chat'
import { RoomType } from '@/types/chat'

const ChatRoomList = () => {
  const navigate = useNavigate()
  const { data } = useQuery<RoomType[]>({
    queryKey: ['getChatRoomList'],
    queryFn: () => getChatRoomList(1),
  })
  return (
    <div>
      <h1 style={{ marginBottom: 40 }}>채팅방 목록</h1>
      {data &&
        data.map((room: RoomType) => (
          <div
            key={room.chatRoomNo}
            onClick={() => navigate(`/chat/${room.chatRoomNo}`)}
            role="presentation"
            style={{ marginBottom: 20 }}
          >
            <div>{room.name}방</div>
          </div>
        ))}
    </div>
  )
}

export default ChatRoomList
