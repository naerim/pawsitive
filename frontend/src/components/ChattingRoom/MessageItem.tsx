import * as m from '@src/components/ChattingRoom/_style/MessageItemStyle'
import { MessageType } from '@src/types/chatType'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'

const MessageItem = ({ item }: { item: MessageType }) => {
  const { message, userNo, chatNo, createdAt } = item
  const [user] = useAtom(userAtom)

  const extractTime = (date: string) => {
    if (!date) {
      const currentDate = new Date()
      const hour = currentDate.getHours().toString().padStart(2, '0') // 시
      const minute = currentDate.getMinutes().toString().padStart(2, '0') // 분
      return `${hour}:${minute}`
    }
    const time = date.split(' ')[1]
    const [hour, minute] = time.split(':')
    return `${hour}:${minute}`
  }

  return (
    <m.Container key={chatNo}>
      <m.Wrap $me={userNo === user.userNo}>
        <m.MessageBox $me={userNo === user.userNo}>{message}</m.MessageBox>
        <span>{extractTime(createdAt)}</span>
      </m.Wrap>
    </m.Container>
  )
}

export default MessageItem
