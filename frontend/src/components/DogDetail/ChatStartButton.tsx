import * as a from '@src/components/DogDetail/_style/ChatStartButtonStyle'
import React from 'react'

const ChatStartButton: React.FC<{ dogNo: number }> = ({ dogNo }) => {
  console.log(dogNo)

  return (
    <a.Container>
      <a.Button type="button">보호소와 채팅하기</a.Button>
    </a.Container>
  )
}

export default ChatStartButton
