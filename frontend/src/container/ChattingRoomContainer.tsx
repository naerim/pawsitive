import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Client } from '@stomp/stompjs'
import SockJS from 'sockjs-client'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { fetchHistoryMessage } from '@src/apis/chat.ts'
import { useQuery } from '@tanstack/react-query'

export type MessageType = {
  userNo: number
  message: string
  userName: string
}

const ChattingRoomContainer = () => {
  const { no } = useParams()
  const [user] = useAtom(userAtom)
  const client = useRef<Client | null>(null)

  const [messages, setMessages] = useState<MessageType[]>([])
  const [newMessage, setNewMessage] = useState<MessageType>({
    message: '',
    userNo: user.userNo,
    userName: user.name,
  })

  // fetchHistoryMessage
  const { refetch } = useQuery({
    queryKey: ['fetchHistoryMessage'],
    queryFn: () => no && fetchHistoryMessage(Number(no)),
  })

  useEffect(() => {
    refetch().then(res => {
      setMessages(res.data)
    })
  }, [no])

  const connectHandler = () => {
    const SockJs = SockJS('https://i10c111.p.ssafy.io/ws/chat')

    client.current = new Client({
      webSocketFactory: () => SockJs,
      debug: str => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        client.current?.subscribe(`/api/v1/chats/sub/rooms/${no}`, msg => {
          const receivedMessage = JSON.parse(msg.body)
          setMessages(prevMessages => [
            ...prevMessages,
            {
              userNo: user.userNo,
              message: receivedMessage.message,
              userName: user.name,
            },
          ])
        })
      },
      onStompError: frame => console.log(frame.headers.message),
    })
    client.current?.activate()
  }

  useEffect(() => {
    connectHandler()
    return () => {
      client.current?.deactivate()
    }
  }, [])

  const sendHandler = () => {
    client.current!.publish({
      destination: `/api/v1/chats/pub/chat`,
      body: JSON.stringify({
        chatRoomNo: no,
        senderNo: user.userNo,
        message: newMessage.message,
      }),
    })
    setNewMessage({ message: '', userNo: user.userNo, userName: user.name })
  }

  return (
    <div>
      <div>채팅방이든아니든니가뭔상관이야</div>
      <button type="button" onClick={() => connectHandler()}>
        응연결안해줄거야
      </button>

      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage.message}
        onChange={e =>
          setNewMessage({
            message: e.target.value,
            userNo: user.userNo,
            userName: user.name,
          })
        }
      />
      <button type="button" onClick={sendHandler}>
        전송
      </button>
    </div>
  )
}

export default ChattingRoomContainer
