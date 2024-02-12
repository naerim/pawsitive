import XModal from '@src/common/XModal'
import * as c from '@src/components/ChattingRoom/_style/ConfirmAppointmentModalStyle'
import { useAtom } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { CloseFunctionType } from '@src/types/commonType'

const ConfirmAppointmentModal = (props: CloseFunctionType) => {
  const { onClose } = props
  const [user] = useAtom(userAtom)

  return (
    <XModal onClose={onClose}>
      <c.State>수락완료</c.State>
      <c.Title>올림보호소와 입양약속</c.Title>
      <c.Row>
        <div>이름</div>
        <div>참참이</div>
      </c.Row>
      <c.Row>
        <div>날짜</div>
        <div>2024.01.23</div>
      </c.Row>
      <c.Row>
        <div>시간</div>
        <div>오후 2시</div>
      </c.Row>
      <c.BottomButtonWrap>
        {user.role === 'SHELTER' ? (
          <>
            <c.RefuseButton type="button">거절</c.RefuseButton>
            <c.SubmitButton type="button">수락</c.SubmitButton>
          </>
        ) : (
          <c.SubmitButton type="button">확인</c.SubmitButton>
        )}
      </c.BottomButtonWrap>
    </XModal>
  )
}

export default ConfirmAppointmentModal
