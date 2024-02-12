import XModal from '@src/common/XModal'
import * as c from '@src/components/ChattingRoom/_style/ConfirmAppointmentModalStyle'
import { useAtom } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { ConfirmAppointmentModalType } from '@src/types/appointment'

const ConfirmAppointmentModal = (props: ConfirmAppointmentModalType) => {
  const { onClose, chatRoomNo, dogName, shelterName, memberName, promise } =
    props
  const [user] = useAtom(userAtom)

  return (
    <XModal onClose={onClose}>
      <c.State>{promise.isAccepted ? '수락완료' : '대기중'}</c.State>
      <c.Title>
        {user.role === 'USER' ? shelterName : memberName}님과 입양약속
      </c.Title>
      <c.Row>
        <div>이름</div>
        <div>{dogName}</div>
      </c.Row>
      <c.Row>
        <div>날짜</div>
        <div>{promise.date}</div>
      </c.Row>
      <c.Row>
        <div>시간</div>
        <div>{promise.time}</div>
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
