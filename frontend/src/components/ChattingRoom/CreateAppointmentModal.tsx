import * as c from '@src/components/ChattingRoom/_style/CreateAppointmentModalStyle'
import XModal from '@src/common/XModal'
import { ChangeEvent, useState } from 'react'
import { CreateAppointmentModalType } from '@src/types/components/ModalType'

const CreateAppointmentModal = (props: CreateAppointmentModalType) => {
  const { onClose, shelterName, dogName } = props

  const [date, setDate] = useState('')
  const [time, setTime] = useState('오전 10시')

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value)
  const handleTimeChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setTime(e.target.value)

  const onSubmit = () => {
    console.log(date, time)
  }

  return (
    <XModal onClose={onClose}>
      <c.Title>{shelterName}와 입양약속 잡기</c.Title>
      <c.Row>
        <div>이름</div>
        <div>{dogName}</div>
      </c.Row>
      <c.Row>
        <div>날짜</div>
        <input type="date" value={date} onChange={handleDateChange} />
      </c.Row>
      <c.Row>
        <div>시간</div>
        <select value={time} onChange={handleTimeChange}>
          <option value="오전 10시">오전 10시</option>
          <option value="오전 11시">오전 11시</option>
          <option value="오후 2시">오후 2시</option>
          <option value="오후 3시">오후 3시</option>
          <option value="오후 4시">오후 4시</option>
        </select>
      </c.Row>
      <c.SubmitButton type="button" onClick={onSubmit}>
        완료
      </c.SubmitButton>
    </XModal>
  )
}

export default CreateAppointmentModal
