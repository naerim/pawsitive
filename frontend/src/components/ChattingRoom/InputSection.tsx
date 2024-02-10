import * as i from '@src/components/ChattingRoom/_style/InputSectionStyle'
import { ChattingInputSectionType } from '@src/types/chatType'
import React from 'react'

const InputSection = (props: ChattingInputSectionType) => {
  const { onClick, message, onChange } = props

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <i.Container>
      <i.Wrap>
        <i.PlusButton>
          <img src="/icon/icon_blck_plus.png" alt="" />
        </i.PlusButton>
        <input
          value={message}
          onKeyUp={handleKeyUp}
          onChange={onChange}
          placeholder="메시지 보내기"
        />
        <i.SendButton type="button" onClick={onClick}>
          <img src="/icon/icon_black_send.png" alt="" />
        </i.SendButton>
      </i.Wrap>
    </i.Container>
  )
}

export default InputSection
