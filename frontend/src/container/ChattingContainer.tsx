import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useQuery } from '@tanstack/react-query'
import { ChatRoomType } from '@src/types/chatType'
import { fetchChatRooms } from '@src/apis/chat'
import ChattingListItem from '@src/components/Chatting/ChattingListItem'
import * as c from '@src/container/style/ChattingContainerStyle'
import ChattingListHeader from '@src/common/ChattingListHeader'

const ChattingContainer = () => {
  const [user] = useAtom(userAtom)

  const { data, isLoading } = useQuery<ChatRoomType[]>({
    queryKey: ['fetchChatRooms'],
    queryFn: () => fetchChatRooms(user.userNo),
  })

  return (
    <c.Container>
      <ChattingListHeader />
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
            />
          ))}
      </c.Wrap>
    </c.Container>
  )
}

export default ChattingContainer
