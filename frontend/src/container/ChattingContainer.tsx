import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Client, Stomp, StompSubscription } from '@stomp/stompjs'
import SockJS from 'sockjs-client'

export type IChatDetail = {
  message: string
}

const ChattingContainer = () => {
  const { no } = useParams()
  const [client, setClient] = useState<Client | null>(null)
  const subscriptionRef = useRef<StompSubscription | null>(null)

  const [messages, setMessages] = useState<IChatDetail[]>([])
  const [newMessage, setNewMessage] = useState<IChatDetail>({ message: '' })

  const setupWebSocket = () => {
    const socket = new SockJS(
      'https://i10c111.p.ssafy.io/ws/chat',
      {},
      {
        transports: ['xhr-polling'],
      },
    )
    const stompClient = Stomp.over(socket)

    setClient(stompClient)

    console.log(stompClient)

    stompClient.onConnect = () => {
      console.log('Stomp 연결이 열렸습니다.')
      subscriptionRef.current = stompClient.subscribe(
        `/sub/rooms/${no}`,
        message => {
          const receivedMessage = JSON.parse(message.body)

          setMessages(prevMessages => [...prevMessages, receivedMessage])
          console.log(receivedMessage)
        },
      )
    }

    stompClient.activate()

    return stompClient
  }

  const connectHandler = () => {
    const newWebSocketClient = setupWebSocket()

    return () => {
      if (newWebSocketClient) {
        newWebSocketClient.deactivate()
      }
    }
  }

  const sendMessage = () => {
    if (client && client.connected) {
      client.publish({
        destination: `/pub/chat/${no}`,
        body: JSON.stringify({ message: newMessage }),
      })
      setMessages(prevMessages => [...prevMessages, newMessage])
    }
    setNewMessage({ message: '' })
  }

  return (
    <div>
      <h2>채팅 방 ({no})</h2>
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
      <button onClick={sendMessage}>전송</button>
    </div>
  )
}

export default ChattingContainer
