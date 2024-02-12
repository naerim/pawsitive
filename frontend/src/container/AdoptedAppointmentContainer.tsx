import * as a from '@src/container/style/AdoptedAppointmentContainerStyle'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'

const AdoptedAppointmentContainer = () => {
  const [user] = useAtom(userAtom)

  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <a.Container>
      <a.Wrap>
        <a.CloseButton>
          <img src="/icon/icon_close.png" alt="" onClick={goBack} />
        </a.CloseButton>
        <a.State>수락완료</a.State>
        <a.Title>올림보호소와 입양약속</a.Title>
        <a.Row>
          <div>이름</div>
          <div>참참이</div>
        </a.Row>
        <a.Row>
          <div>날짜</div>
          <div>2024.01.23</div>
        </a.Row>
        <a.Row>
          <div>시간</div>
          <div>오후 2시</div>
        </a.Row>
        <a.BottomButtonWrap>
          {user.role === 'SHELTER' ? (
            <>
              <a.RefuseButton type="button">거절</a.RefuseButton>
              <a.SubmitButton type="button">수락</a.SubmitButton>
            </>
          ) : (
            <a.SubmitButton type="button">확인</a.SubmitButton>
          )}
        </a.BottomButtonWrap>
      </a.Wrap>
    </a.Container>
  )
}

export default AdoptedAppointmentContainer
