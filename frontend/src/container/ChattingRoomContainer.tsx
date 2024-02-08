import { useParams } from 'react-router-dom'
import { useRef, useState } from 'react'
import { CompatClient, Stomp } from '@stomp/stompjs'
import SockJS from 'sockjs-client'
import { IChatDetail } from '@src/container/ChattingContainer'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'

const ChattingRoomContainer = () => {
  const { no } = useParams()
  const [user] = useAtom(userAtom)
  const client = useRef<CompatClient>()

  const [messages, setMessages] = useState<IChatDetail[]>([])
  const [newMessage, setNewMessage] = useState<IChatDetail>({ message: '' })

  const connectHandler = () => {
    const SockJs = SockJS('https://i10c111.p.ssafy.io/ws/chat')
    client.current = Stomp.over(() => SockJs)
    // 이전 대화
    client.current?.connect(
      {},
      () => {
        client.current?.subscribe(`/api/v1/chats/sub/rooms/${no}`, msg => {
          const receivedMessage = JSON.parse(msg.body)
          setMessages(prevMessages => [...prevMessages, receivedMessage])
        })
      },
      (error: Error) => {
        console.error('WebSocket connection error : ', error)
      },
      {},
    )
  }

  const sendHandler = () => {
    client.current!.send(
      `/api/v1/chats/pub/chat`,
      {},
      JSON.stringify({
        chatRoomNo: no,
        senderNo: user.userNo,
        message: newMessage.message,
      }),
    )
    setMessages(prevMessages => [...prevMessages, newMessage])
    setNewMessage({ message: '' })
  }

  // {
  //   chatRoomNo: no,
  //     senderNo: 1,
  //   message: inputMessage,
  // }

  // const sendMessage = () => {
  //   if (client && client.connected) {
  //     client.publish({
  //       destination: `/api/v1/chats/pub/chat/${no}`,
  //       body: JSON.stringify({
  //         chatRoomNo: no,
  //         senderNo: user.userNo,
  //         message: newMessage,
  //       }),
  //     })
  //     setMessages(prevMessages => [...prevMessages, newMessage])
  //   }
  //   setNewMessage({ message: '' })
  // }
  return (
    <div>
      <div>채팅방</div>
      <button type="button" onClick={() => connectHandler()}>
        연결
      </button>

      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage.message}
        onChange={e => setNewMessage({ message: e.target.value })}
      />
      <button type="button" onClick={sendHandler}>
        전송
      </button>
    </div>
  )
}

export default ChattingRoomContainer
