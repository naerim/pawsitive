import { useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Client } from '@stomp/stompjs'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { fetchHistoryMessage } from '@src/apis/chat'
import { useQuery } from '@tanstack/react-query'
import { MessageType } from '@src/types/chatType'
import SockJS from 'sockjs-client'
import MessageItem from '@src/components/ChattingRoom/MessageItem'
import * as c from '@src/container/style/ChattingRoomContainerStyle'
import ChattingRoomHeader from '@src/components/ChattingRoom/ChattingRoomHeader'
import InputSection from '@src/components/ChattingRoom/InputSection'

const ChattingRoomContainer = () => {
  const location = useLocation()
  const { dogNo, chatRoomNo } = location.state

  const [user] = useAtom(userAtom)
  const client = useRef<Client | null>(null)

  const defaultMessage = {
    message: '',
    dogNo: 0,
    userNo: user.userNo,
    userName: user.name,
    createdAt: '',
    type: null,
    userImage: null,
    chatNo: 0,
    isRead: false,
  }

  const [messages, setMessages] = useState<MessageType[]>([])
  const [newMessage, setNewMessage] = useState<MessageType>(defaultMessage)

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  // fetchHistoryMessage
  const { refetch } = useQuery({
    queryKey: ['fetchHistoryMessage'],
    queryFn: () => chatRoomNo && fetchHistoryMessage(Number(chatRoomNo)),
  })

  useEffect(() => {
    refetch().then(res => {
      setMessages(res.data)
      scrollToBottom()
    })
  }, [refetch])

  const connectHandler = () => {
    const SockJs = SockJS('https://i10c111.p.ssafy.io/ws/chat')
    client.current = new Client({
      webSocketFactory: () => SockJs,
      debug: str => console.log(str),
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        client.current?.subscribe(
          `/api/v1/chats/sub/rooms/${chatRoomNo}`,
          msg => {
            const receivedMessage = JSON.parse(msg.body)
            setMessages(prevMessages => [
              ...prevMessages,
              {
                userNo: receivedMessage.userNo,
                message: receivedMessage.message,
                dogNo: receivedMessage.dogNo,
                userName: user.name,
                createdAt: '',
                type: 'chat',
                userImage: '',
                chatNo: receivedMessage.chatNo,
                isRead: false,
              },
            ])
            console.log('sss')
            scrollToBottom()
          },
        )
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sendHandler = () => {
    // 빈 문자 았는지 확인
    if (newMessage.message.trim() !== '') {
      client.current!.publish({
        destination: `/api/v1/chats/pub/chat`,
        body: JSON.stringify({
          chatRoomNo,
          senderNo: user.userNo,
          message: newMessage.message,
          type: 'chat',
        }),
      })
      setNewMessage(defaultMessage)
      scrollToBottom()
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <c.Container>
      <ChattingRoomHeader dogNo={dogNo} />
      <c.MessageSection ref={scrollRef}>
        {messages.map(message => (
          <MessageItem item={message} key={message.chatNo} />
        ))}
      </c.MessageSection>
      <InputSection
        onClick={sendHandler}
        message={newMessage.message}
        onChange={e =>
          setNewMessage(prev => ({ ...prev, message: e.target.value }))
        }
      />
    </c.Container>
  )
}

export default ChattingRoomContainer
