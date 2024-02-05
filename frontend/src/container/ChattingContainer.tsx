import { useCreateRoom } from '@src/components/Chat/useCreateRoom'
import { useQuery } from '@tanstack/react-query'
import { getRoomList } from '@src/components/Chat/chat'
import { RoomType } from '@src/components/Chat/roomType'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #f2f2f2;
  margin-bottom: 20px;
`

const ChattingContainer = () => {
  const navigate = useNavigate()
  const { data } = useQuery<RoomType[]>({
    queryKey: ['getRoomList'],
    queryFn: () => getRoomList(1),
  })

  // 임시 채팅방 생성 함수
  const { createRoomHandler } = useCreateRoom()

  // 메세지 보내기
  // const sendHandler = () => {}

  return (
    <div>
      <div>chatting 목록</div>
      <button type="button" onClick={createRoomHandler}>
        채팅방 생성
      </button>
      {data &&
        data.map((room: RoomType) => (
          <Container
            key={room.chatRoomNo}
            onClick={() => navigate(`/chat/${room.chatRoomNo}`)}
          >
            <div>{room.name}방</div>
          </Container>
        ))}
      {/* <button onClick={onClickHandler}> chatting 완료</button> */}
    </div>
  )
}

export default ChattingContainer
