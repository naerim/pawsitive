import * as c from '@src/components/Chatting/_style/ChattingListItemStyle'
import { ChattingListItemType } from '@src/types/chatType'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user.ts'

const ChattingListItem = (props: ChattingListItemType) => {
  const {
    chatRoomNo,
    name,
    memberProfileImage,
    shelterProfileImage,
    lastChat,
    id,
    dogName,
    memberName,
  } = props
  const [user] = useAtom(userAtom)

  const navigate = useNavigate()
  const goChatRoom = () => {
    navigate(`/chat/${chatRoomNo}`)
  }

  return (
    <c.Container onClick={goChatRoom} key={id}>
      <c.ImgWrap>
        <img src={memberProfileImage || '/img/img_bottle.png'} alt="" />
        <img src={shelterProfileImage || '/img/img_bowl.png'} alt="" />
      </c.ImgWrap>
      <c.Right>
        <c.Name>
          {user.role === 'USER' ? name : `${memberName} - ${dogName}`}
        </c.Name>
        <c.LastMsg>{lastChat ? lastChat.message : '-'}</c.LastMsg>
      </c.Right>
    </c.Container>
  )
}

export default ChattingListItem
