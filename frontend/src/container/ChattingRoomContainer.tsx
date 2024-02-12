import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Client } from '@stomp/stompjs'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { fetchChatRoomDetail } from '@src/apis/chat'
import { useQuery } from '@tanstack/react-query'
import { MessageType } from '@src/types/chatType'
import SockJS from 'sockjs-client'
import MessageItem from '@src/components/ChattingRoom/MessageItem'
import * as c from '@src/container/style/ChattingRoomContainerStyle'
import InputSection from '@src/components/ChattingRoom/InputSection'
import ChattingRoomHeader from '@src/components/ChattingRoom/ChattingRoomHeader'
import CreateAppointmentModal from '@src/components/ChattingRoom/CreateAppointmentModal'
import ConfirmAppointmentModal from '@src/components/ChattingRoom/ConfirmAppointmentModal'

const ChattingRoomContainer = () => {
  const { no } = useParams()

  const [user] = useAtom(userAtom)
  const client = useRef<Client | null>(null)

  const [createAppointmentModalVisible, setCreateAppointmentModalVisible] =
    useState<boolean>(false)
  const [confirmAppointmentModalVisible, setConfirmAppointmentModalVisible] =
    useState<boolean>(false)

  const defaultMessage = {
    chatNo: 0,
    createdAt: '',
    isRead: false,
    message: '',
    type: null,
    userImage: null,
    userName: user.name,
    userNo: user.userNo,
  }

  const [messages, setMessages] = useState<MessageType[]>([])
  const [newMessage, setNewMessage] = useState<MessageType>(defaultMessage)

  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  // fetchChatRoomDetail
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['fetchChatRoomDetail', no],
    queryFn: () => fetchChatRoomDetail(Number(no)),
  })

  useEffect(() => {
    refetch().then(res => {
      setMessages(res.data.chatList)
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
        client.current?.subscribe(`/api/v1/chats/sub/rooms/${no}`, msg => {
          const receivedMessage = JSON.parse(msg.body)
          setMessages(prevMessages => [
            ...prevMessages,
            {
              userNo: receivedMessage.userNo,
              message: receivedMessage.message,
              userName: user.name,
              createdAt: '',
              type: receivedMessage.type,
              userImage: '',
              chatNo: receivedMessage.chatNo,
              isRead: false,
            },
          ])
          scrollToBottom()
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const sendHandler = () => {
    // 빈 문자 았는지 확인
    if (newMessage.message.trim() !== '') {
      client.current!.publish({
        destination: `/api/v1/chats/pub/chat`,
        body: JSON.stringify({
          chatRoomNo: no,
          senderNo: user.userNo,
          message: newMessage.message,
          type: 'chat',
        }),
      })
      setNewMessage(defaultMessage)
      scrollToBottom()
    }
  }
  console.log(data)
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <>
      <c.Container>
        {!isLoading && data && (
          <>
            <ChattingRoomHeader
              dog={data.dog}
              member={data.member}
              promise={data.promise}
              shelter={data.shelter}
              onOpenCreateAppointmentModal={() =>
                setCreateAppointmentModalVisible(true)
              }
              onOpenConfirmAppointmentModal={() =>
                setConfirmAppointmentModalVisible(true)
              }
            />
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
          </>
        )}
      </c.Container>
      {createAppointmentModalVisible && (
        <CreateAppointmentModal
          chatRoomNo={Number(no)}
          onClose={() => setCreateAppointmentModalVisible(false)}
          dogName={data.dog.name}
          shelterName={data.shelter.name}
        />
      )}
      {confirmAppointmentModalVisible && (
        <ConfirmAppointmentModal
          chatRoomNo={Number(no)}
          shelterName={data.shetle.name}
          dogName={data.dog.name}
          promise={data.promise}
          onClose={() => setConfirmAppointmentModalVisible(false)}
        />
      )}
    </>
  )
}

export default ChattingRoomContainer
