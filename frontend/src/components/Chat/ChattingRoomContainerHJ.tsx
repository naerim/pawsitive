import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Client, Stomp, StompSubscription } from '@stomp/stompjs'
import SockJS from 'sockjs-client'

const ChattingRoomContainerHj = () => {
  const { no } = useParams()
  const [client, setClient] = useState<Client | null>(null)
  const subscriptionRef = useRef<StompSubscription | null>(null)

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const setupWebSocket = () => {
    // const socket = new WebSocket('ws://i10c111.p.ssafy.io/ws/chat')
    // const stompClient = Stomp.over(socket)

    const socket = new SockJS(
      'http://i10c111.p.ssafy.io:8081/ws/chat',
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
    setNewMessage('')
  }

  return (
    <div>
      <h2>채팅 방 ({no})</h2>
      <button type="button" onClick={() => connectHandler()}>
        연결
      </button>

      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={e => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>전송</button>
    </div>
  )
}

export default ChattingRoomContainerHj
