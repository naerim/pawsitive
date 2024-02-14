import { useParams } from 'react-router-dom'
import * as c from '@src/container/style/ChattingContainerStyle'
import ChattingListItem from '@src/components/Chatting/ChattingListItem'
import { useQuery } from '@tanstack/react-query'
import { ChattingListItemType } from '@src/types/chatType'
import { fetchSameDogChatRooms } from '@src/apis/chat'
import TextHeader from '@src/common/TextHeader'

const AboutSameDogChatListContainer = () => {
  const { dogNo } = useParams<{ dogNo: string }>()

  const { data, isLoading } = useQuery<ChattingListItemType[]>({
    queryKey: ['fetchSameDogChatRooms'],
    queryFn: () => fetchSameDogChatRooms(Number(dogNo)),
  })

  return (
    <c.Container>
      <TextHeader title="현재 진행중인 채팅방" />
      <c.Wrap>
        {!isLoading &&
          data &&
          data.map(item => (
            <ChattingListItem
              key={item.id}
              chatRoomNo={item.chatRoomNo}
              name={item.name}
              lastChat={item.lastChat}
              memberProfileImage={item.memberProfileImage}
              shelterProfileImage={item.shelterProfileImage}
              id={item.id}
              dogNo={item.dogNo}
              isPromiseAccepted={item.isPromiseAccepted}
              promiseCreatedAt={item.promiseCreatedAt}
              dogName={item.dogName}
              memberName={item.memberName}
              memberNo={item.memberNo}
            />
          ))}
      </c.Wrap>
    </c.Container>
  )
}

export default AboutSameDogChatListContainer
