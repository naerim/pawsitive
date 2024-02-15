import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useQuery } from '@tanstack/react-query'
import { ChattingListItemType } from '@src/types/chatType'
import { fetchChatRooms } from '@src/apis/chat'
import ChattingListItem from '@src/components/Chatting/ChattingListItem'
import * as c from '@src/container/style/ChattingContainerStyle'
import TextHeader from '@src/common/TextHeader'

const ChattingContainer = () => {
  const [user] = useAtom(userAtom)

  const { data, isLoading } = useQuery<ChattingListItemType[]>({
    queryKey: ['fetchChatRooms', user.userNo],
    queryFn: () => fetchChatRooms(user.userNo),
  })

  return (
    <c.Container>
      <TextHeader title="채팅" />
      <c.Wrap>
        {!isLoading && data && data.length === 0 ? (
          <div>진행중인 채팅방이 없습니다.</div>
        ) : (
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
          ))
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default ChattingContainer
