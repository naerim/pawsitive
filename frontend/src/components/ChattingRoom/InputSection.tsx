import * as i from '@src/components/ChattingRoom/_style/InputSectionStyle'

const InputSection = (props: {
  onClick: () => void
  message: string
  onChange: any
}) => {
  const { onClick, message, onChange } = props
  return (
    <i.Container>
      <i.Wrap>
        <i.PlusButton>
          <img src="/icon/icon_blck_plus.png" alt="" />
        </i.PlusButton>
        <input
          value={message}
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
