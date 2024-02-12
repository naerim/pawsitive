import { useParams } from 'react-router-dom'
import * as c from '@src/container/style/ChattingContainerStyle'
import ChattingListItem from '@src/components/Chatting/ChattingListItem'
import { useQuery } from '@tanstack/react-query'
import { ChatRoomType } from '@src/types/chatType'
import { fetchSameDogChatRooms } from '@src/apis/chat'
import { useEffect, useState } from 'react'
import TextHeader from '@src/common/TextHeader'

const AboutSameDogChatListContainer = () => {
  const { dogNo } = useParams<{ dogNo: string }>()
  const [sameDogChatList, setSameDogChatList] = useState([])

  const { data, isLoading } = useQuery<ChatRoomType[]>({
    queryKey: ['fetchSameDogChatRooms'],
    queryFn: () => fetchSameDogChatRooms(Number(dogNo)),
  })

  useEffect(() => {
    setSameDogChatList(data)
  }, [data])

  return (
    <c.Container>
      <TextHeader title="현재 진행중인 채팅방" />
      <c.Wrap>
        {!isLoading &&
          sameDogChatList &&
          sameDogChatList.map(item => (
            <ChattingListItem
              key={item.id}
              chatRoomNo={item.chatRoomNo}
              name={item.name}
              lastChat={item.lastChat}
              memberProfileImage={item.memberProfileImage}
              shelterProfileImage={item.shelterProfileImage}
              id={item.id}
            />
          ))}
      </c.Wrap>
    </c.Container>
  )
}

export default AboutSameDogChatListContainer
