import { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompatClient, Stomp } from '@stomp/stompjs'
import SockJS from 'sockjs-client'

export type IChatDetail = {
  chatRoomNo: string
  userNo: number
  message: string
}

const ChattingRoomContainer = () => {
  const { no } = useParams()
  const [stompClient, setStompClient] = useState<CompatClient | null>(null)
  const client = useRef<CompatClient>()
  const [roomId, setRoomId] = useState('101ec641aebd40e7')
  const [inputMessage, setInputMessage] = useState('')
  const [chatMessageList, setChatMessageList] = useState<IChatDetail[]>([])
  const [chatMessage, setChatMessage] = useState('')

  // 채팅
  const sendHandler = () => {
    console.log(`room Id:${no}`)
    console.log(client.current)
    client.current!.send(
      '/pub/chat',
      {},
      JSON.stringify({
        chatRoomNo: no,
        userNo: 1,
        message: inputMessage,
      }),
    )
    setInputMessage('')
  }

  const connectHandler = (mockId: string, mockName?: string) => {
    const SockJs = SockJS('https://i10c111.p.ssafy.io:8090/ws/chat')
    client.current = Stomp.over(SockJs)
    setChatMessageList([])

    client.current.connect(
      {},
      () => {
        client.current?.subscribe(`/sub/rooms/${mockId}`, message => {
          setChatMessage(JSON.parse(message.body))
          console.log(message)
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
      <div>채팅방</div>
      <button type="button" onClick={() => connectHandler(String(no), 'sd')}>
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

export default ChattingRoomContainer
