import * as m from '@src/components/ChattingRoom/_style/MessageItemStyle'
import { MessageType } from '@src/types/chatType'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user.ts'

const MessageItem = (props: { item: MessageType }) => {
  const { message, userNo, chatNo } = props.item

  const [user] = useAtom(userAtom)

  return (
    <m.Container key={chatNo}>
      <m.MessageBox $me={userNo === user.userNo}>{message}</m.MessageBox>
    </m.Container>
  )
}

export default MessageItem
