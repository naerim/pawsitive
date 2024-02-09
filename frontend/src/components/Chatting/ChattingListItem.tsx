import * as c from '@src/components/Chatting/_style/ChattingListItemStyle'
import { ChatRoomType } from '@src/types/chatType'
import { useNavigate } from 'react-router-dom'

const ChattingListItem = (props: ChatRoomType) => {
  const { chatRoomNo, name, dogNo, id } = props

  const navigate = useNavigate()
  const goChatRoom = () => navigate(`/chat/${chatRoomNo}`)

  return (
    <c.Container onClick={goChatRoom}>
      <c.ImgWrap>
        <img src="/img/img_bottle.png" alt="" />
        <img src="/img/img_bowl.png" alt="" />
      </c.ImgWrap>
      <c.Right>
        <c.Name>{name}</c.Name>
        <c.LastMsg>마지막 메세지입니다.</c.LastMsg>
      </c.Right>
    </c.Container>
  )
}

export default ChattingListItem
