import * as c from '@src/container/style/CreateAdoptedAppointmentContainerStyle'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useState } from 'react'

const CreateAdoptedAppointmentContainer = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDate(e.target.value)
  const handleTimeChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setTime(e.target.value)

  return (
    <c.Container>
      <c.Wrap>
        <c.CloseButton>
          <img src="/icon/icon_close.png" alt="" onClick={goBack} />
        </c.CloseButton>
        <c.Title>올림보호소와 입양약속 잡기</c.Title>
        <c.Row>
          <div>이름</div>
          <div>참참이</div>
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
        <c.SubmitButton type="button">완료</c.SubmitButton>
      </c.Wrap>
    </c.Container>
  )
}

export default CreateAdoptedAppointmentContainer
