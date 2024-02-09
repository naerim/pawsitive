import * as a from '@src/components/DogDetail/style/ChatStartButtonStyle'
import { useEffect, useState } from 'react'
import { createChatRoom } from '@src/apis/chat'
import { CreateChatRoomParamsType } from '@src/types/chatType'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useLocation, useNavigate } from 'react-router-dom'

const ChatStartButton = () => {
  const userRole = window.localStorage.getItem('role')
  const location = useLocation()
  const dogNo = location.state?.dogNo
  const navigate = useNavigate()
  const [user] = useAtom(userAtom)
  const [createChatRoomParams, setCreateChatRoomParams] =
    useState<CreateChatRoomParamsType>()

  useEffect(() => {
    setCreateChatRoomParams({ dogNo, userNo: user.userNo })
  }, [dogNo, user])

  const handleUserClick = async () => {
    const createChatRoomResult = await createChatRoom(createChatRoomParams)
    console.log(createChatRoomResult)
    if (createChatRoomResult && createChatRoomResult.chatRoomNo) {
      navigate(`/chat/${createChatRoomResult.chatRoomNo}`)
    }
  }

  const handleShelterClick = async () => {
    navigate(`/chat`)
  }

  return (
    <a.Container>
      {userRole === 'USER' ? (
        <a.Button type="button" onClick={handleShelterClick}>
          진행중인 채팅방 보기
        </a.Button>
      ) : (
        <a.Button type="button" onClick={handleUserClick}>
          보호소와 채팅하기
        </a.Button>
      )}
    </a.Container>
  )
}

export default ChatStartButton
