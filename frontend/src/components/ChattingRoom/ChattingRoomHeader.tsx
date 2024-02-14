import * as c from '@src/components/ChattingRoom/_style/ChattingRoomHeaderStyle'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { ChattingRoomHeaderType } from '@src/types/chatType'
import { useMutation } from '@tanstack/react-query'
import { registerShelterAdoption } from '@src/apis/adoptDog'
import { publicRequest } from '@src/hooks/requestMethods'

const ChattingRoomHeader = (props: ChattingRoomHeaderType) => {
  const [user, setUser] = useAtom(userAtom)

  const {
    dog,
    member,
    promise,
    shelter,
    onOpenCreateAppointmentModal,
    onOpenConfirmAppointmentModal,
    setWebcamVisible,
    chatRoomNo,
    setMySessionId,
  } = props

  const navigate = useNavigate()

  const adopt = false

  const goBack = () => navigate('/chat')

  const { mutate } = useMutation({
    mutationKey: ['registerShelterAdoption'],
    mutationFn: registerShelterAdoption,
    onSuccess: () => {
      setUser(currentUser => ({ ...currentUser, stage: 3 }))
      window.location.reload()
    },
    onError: error => console.error('보호소의 입양확정 실패 : ', error),
  })

  // 입양확전 버튼 클릭시
  const onClickConfirmAdopt = () => {
    const result = confirm('입양을 확정하시겠습니까?')
    if (result) {
      mutate({ userNo: member.userNo, dogNo: dog.dogNo })
    }
  }

  // 세선 엳기
  const getSession = async () => {
    const url = '/sessions'
    const response = await publicRequest.post(url, { chatRoomNo })
    setMySessionId(response.data.sessionId)
  }

  const onClickCall = () => {
    getSession().then(() => {
      setWebcamVisible(true)
    })
  }

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
            onClick={onClickCall}
          />
        </c.TopWrap>
        <c.InfoWrap>
          <c.InfoDetailWrap>
            <img src={dog.image} alt="" />
            <span>
              <div className="name">{dog.name}</div>
              <div>
                {dog.sex === 'f' ? '암컷' : '수컷'} ∙ 중성화{' '}
                {dog.isNeutralized ? '0' : 'X'} ∙ {dog.age}살 ∙ {dog.kind}
              </div>
            </span>
          </c.InfoDetailWrap>
          <c.ButtonWrap>
            {promise.isAccepted !== null ? (
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
            {user.role === 'SHELTER' && promise.isAccepted && !adopt && (
              <button type="button" onClick={onClickConfirmAdopt}>
                입양확정 하기
              </button>
            )}
            {adopt && <c.DoneText>입양확정</c.DoneText>}
          </c.ButtonWrap>
        </c.InfoWrap>
      </c.Wrap>
    </c.Container>
  )
}

export default ChattingRoomHeader
