import * as c from '@src/components/ChattingRoom/_style/ChattingRoomHeaderStyle'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { ChattingRoomHeaderType } from '@src/types/chatType'

const ChattingRoomHeader = (props: ChattingRoomHeaderType) => {
  const [user] = useAtom(userAtom)

  const {
    dog,
    member,
    promise,
    shelter,
    onOpenCreateAppointmentModal,
    onOpenConfirmAppointmentModal,
  } = props

  const navigate = useNavigate()

  const goBack = () => navigate('/chat')

  return (
    <c.Container>
      <c.Wrap>
        <c.TopWrap>
          <img
            className="arrow"
            src="/icon/icon_black_arrow_left.png"
            alt=""
            onClick={goBack}
          />
          <span>
            {user.role === 'SHELTER' ? `${member.name}` : `${shelter.name}`}-
            {dog.name}
          </span>
          <img
            className="call"
            src="/icon/icon_phone.png"
            alt=""
            onClick={goBack}
          />
        </c.TopWrap>
        <c.InfoWrap>
          <c.InfoDetailWrap>
            <img src={dog.image} alt="" />
            <span>
              <div className="name">{dog.name}</div>
              <div>
                {dog.sex === 'f' ? '암컷' : '수컷'} ∙ 중성화{' '}
                {dog.isNeutralized ? '0' : 'X'} ∙ {dog.age}
                (년생) ∙ {dog.kind}
              </div>
            </span>
          </c.InfoDetailWrap>
          <c.ButtonWrap>
            {promise.isAccepted ? (
              <button type="button" onClick={onOpenConfirmAppointmentModal}>
                입양약속 보기
              </button>
            ) : (
              user.role === 'USER' && (
                <button type="button" onClick={onOpenCreateAppointmentModal}>
                  입양약속 잡기
                </button>
              )
            )}
            {user.role === 'SHELTER' && (
              <button type="button">입양설문 보기</button>
            )}
          </c.ButtonWrap>
        </c.InfoWrap>
      </c.Wrap>
    </c.Container>
  )
}

export default ChattingRoomHeader
