import * as c from '@src/components/Chatting/_style/ChattingListItemStyle'
import { ChatRoomType } from '@src/types/chatType'
import { useNavigate } from 'react-router-dom'

const ChattingListItem = (props: ChatRoomType) => {
  const {
    chatRoomNo,
    name,
    memberProfileImage,
    shelterProfileImage,
    lastChat,
    id,
  } = props

  const navigate = useNavigate()
  const goChatRoom = () => navigate(`/chat/${chatRoomNo}`)

  return (
    <c.Container onClick={goChatRoom} key={id}>
      <c.ImgWrap>
        <img src={memberProfileImage || '/img/img_bottle.png'} alt="" />
        <img src={shelterProfileImage || '/img/img_bowl.png'} alt="" />
      </c.ImgWrap>
      <c.Right>
        <c.Name>{name}</c.Name>
        <c.LastMsg>{lastChat.message}</c.LastMsg>
      </c.Right>
    </c.Container>
  )
}

export default ChattingListItem
