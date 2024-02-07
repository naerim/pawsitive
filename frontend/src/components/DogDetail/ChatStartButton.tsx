import * as a from '@src/components/DogDetail/_style/ChatStartButtonStyle'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchChatRooms } from '@src/apis/chat'
import { ChatRoomType } from '@src/types/chatType'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useLocation, useNavigate } from 'react-router-dom'

const ChatStartButton = () => {
  const location = useLocation()
  const dogNo = location.state?.dogNo
  const navigate = useNavigate()
  const [chatRooms, setChatRooms] = useState<ChatRoomType[]>([])
  const [user] = useAtom(userAtom)

  const { data, isLoading } = useQuery<ChatRoomType[]>({
    queryKey: ['fetchChatRooms'],
    queryFn: () => fetchChatRooms(user.userNo),
  })

  useEffect(() => {
    if (!isLoading && data) {
      setChatRooms(data)
    }
  }, [isLoading, data, user.userNo, dogNo])

  const doesChatRoomExist = () => {
    return chatRooms.some(chatRoom => chatRoom.dogNo === dogNo)
  }

  const handleClick = () => {
    if (doesChatRoomExist()) {
      navigate('/chatroom')
    }
  }

  return (
    <a.Container>
      <a.Button type="button" onClick={handleClick}>
        보호소와 채팅하기
      </a.Button>
    </a.Container>
  )
}

export default ChatStartButton
