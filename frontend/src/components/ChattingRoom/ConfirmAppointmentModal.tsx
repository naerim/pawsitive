import XModal from '@src/common/XModal'
import * as c from '@src/components/ChattingRoom/_style/ConfirmAppointmentModalStyle'
import { useAtom } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { ConfirmAppointmentModalType } from '@src/types/appointment'
import { useMutation } from '@tanstack/react-query'
import { acceptAppointment } from '@src/apis/appointment'

const ConfirmAppointmentModal = (props: ConfirmAppointmentModalType) => {
  const {
    onClose,
    chatRoomNo,
    dogName,
    shelterName,
    memberName,
    promise,
    sendAlarm,
  } = props
  const [user] = useAtom(userAtom)

  const { mutate } = useMutation({
    mutationKey: ['acceptAppointment'],
    mutationFn: acceptAppointment,
    onSuccess(res) {
      console.log('입양약속 수락 성공', res)
      sendAlarm(
        '입양약속이 성사되었습니다! 함께한 약속 시간을 소중히 지켜주세요.',
      )
      window.location.reload()
      onClose()
    },
    onError(error) {
      console.error('입양약속 수락 실패:', error)
    },
  })

  const onClickAccept = () => {
    const answer = confirm(
      `${promise.date} ${promise.time} 입양약속을 수락하시겠습니까`,
    )
    if (answer) {
      mutate({
        userNo: user.userNo,
        chatRoomNo,
        date: promise.date,
        time: promise.time,
      })
    }
  }

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
            <c.SubmitButton type="button" onClick={onClickAccept}>
              수락
            </c.SubmitButton>
          </>
        ) : (
          <c.SubmitButton type="button" onClick={onClose}>
            확인
          </c.SubmitButton>
        )}
      </c.BottomButtonWrap>
    </XModal>
  )
}

export default ConfirmAppointmentModal
