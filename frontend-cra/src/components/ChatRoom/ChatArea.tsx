import { useParams } from 'react-router-dom'
import { CompatClient, Stomp } from '@stomp/stompjs'
import { useRef, useState } from 'react'
import SockJS from 'sockjs-client'

export type IChatDetail = {
  chatRoomNo: string
  userNo: number
  message: string
}

const ChatArea = () => {
  const { id } = useParams()
  const client = useRef<CompatClient>()
  const [, setRoomId] = useState('101ec641aebd40e7')
  // const [inputMessage, setInputMessage] = useState('')
  const [, setChatMessageList] = useState<IChatDetail[]>([])
  const [, setChatMessage] = useState('')

  // const setupWebSocket = (mockId: string) => {
  //   const newClient = new Client({
  //     brokerURL: 'ws://localhost:8081/ws/chat',
  //     reconnectDelay: 2000,
  //   })
  //
  //   setClient(newClient)
  //   console.log(newClient)
  //
  //   newClient.onConnect = () => {
  //     console.log('Stomp 연결이 열렸습니다.')
  //     subscriptionRef.current = newClient.subscribe(
  //       `/sub/rooms/${mockId}`,
  //       message => {
  //         console.log(message.body)
  //         // const receivedMessage = JSON.parse(message.body)
  //         // setMessages(prevMessages => [...prevMessages, receivedMessage])
  //       },
  //     )
  //   }
  //
  //   newClient.activate()
  //
  //   return newClient
  // }
  //
  // useEffect(() => {
  //   const newWebSocketClient = id && setupWebSocket(id)
  //
  //   return () => {
  //     if (newWebSocketClient) {
  //       newWebSocketClient.deactivate()
  //     }
  //   }
  // }, [id])

  const connectHandler = (mockId: string, mockName?: string) => {
    const SockJs = SockJS('http://localhost:8081/ws/chat')
    client.current = Stomp.over(() => SockJs)
    setChatMessageList([])

    client.current.connect(
      {},
      () => {
        client.current?.subscribe(`/sub/rooms/${mockId}`, message => {
          setChatMessage(JSON.parse(message.body))
          console.log(message)
          console.log(mockName)
        })
      },
      (error: any) => {
        console.error('WebSocket connection error:', error)
      },
      {},
    )
    setRoomId(mockId)
  }

  return (
    <div>
      <button
        onClick={() => connectHandler(String(id), 'sd')}
        style={{ background: 'f2f2f2', padding: 20, marginBottom: 20 }}
        type="button"
      >
        연결
      </button>
      <div>채팅방</div>
    </div>
  )
}

export default ChatArea
