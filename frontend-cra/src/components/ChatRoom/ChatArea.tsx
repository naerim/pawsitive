import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Client } from '@stomp/stompjs'
import SockJS from 'sockjs-client'

export type IChatDetail = {
  chatRoomNo: string
  userNo: number
  message: string
}

const ChatArea = () => {
  const { id } = useParams()
  const client = useRef<Client>()
  const [, setRoomId] = useState('101ec641aebd40e7')
  const [inputMessage, setInputMessage] = useState('')
  const [chatMessageList, setChatMessageList] = useState<IChatDetail[]>([])
  // const [chatMessage, setChatMessage] = useState('')

  // 채팅
  const sendHandler = () => {
    console.log(`room Id:${id}`)
    console.log(client.current)
    client.current!.publish({
      destination: '/pub/chat',
      body: JSON.stringify({
        chatRoomNo: id,
        userNo: 1,
        message: inputMessage,
      }),
    })
    setInputMessage('')
  }

  const connectHandler = (mockId: string, mockName?: string) => {
    client.current = new Client({
      webSocketFactory: () =>
        new SockJS(
          'http://localhost:8080/ws/chat',
          {},
          {
            // webSocketFactory: () => new SockJS('https://i10c111.p.ssafy.io/ws/chat', {}, {
            //     webSocketFactory: () => new SockJS('https://stream.elite12.de/api/sock', {}, {
            transports: ['xhr-polling'],
          },
        ),
      reconnectDelay: 200000,
      heartbeatIncoming: 16000,
      heartbeatOutgoing: 16000,
      onConnect: () => {
        console.error('0 stomp onConnect : ')
        console.log(mockName)
        // client.current?.subscribe(`/sub/rooms/${mockId}`, message => {
        //     setChatMessage(JSON.parse(message.body))
        //     console.log(message)
        // })
      },
      onStompError: frame => {
        console.error('1 stomp error : ', frame)
      },
      onDisconnect: frame => {
        console.error('2 disconnect : ', frame)
      },
      onWebSocketClose: frame => {
        console.log('3 Stomp WebSocket Closed', frame)
      },
      debug(str) {
        console.error('4 debug : ', str)
      },
      onUnhandledMessage: msg => {
        console.log('5 unhandled Message', msg)
      },
    })

    // Stomp.over(() => SockJs)
    setChatMessageList([])

    client.current?.activate()

    setRoomId(mockId)
  }

  return (
    <div>
      <div>채팅방</div>
      <button type="button" onClick={() => connectHandler(String(id), 'sd')}>
        연결
      </button>
      <div>
        {chatMessageList.map(item => (
          <div key={item.chatRoomNo}>{item.message}</div>
        ))}
      </div>
      <input type="text" onChange={e => setInputMessage(e.target.value)} />
      <button type="button" onClick={sendHandler}>
        보내기
      </button>
    </div>
  )
}

export default ChatArea
