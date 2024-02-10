import { useNavigate } from 'react-router-dom'
import QuestionCreate from '@src/components/Question/QuestionCreate'
import * as q from '@src/container/style/QuestionCreateContainerStyle'

const QuestionCreateContainer = () => {
  const navigate = useNavigate()

  const handlePrevStep = () => {
    navigate('/')
  }

  return (
    <q.Container>
      <q.TopContainer>
        <q.BackButtonWrap onClick={handlePrevStep}>
          <img src="/icon/icon_gray_arrow_left.png" alt="" />
        </q.BackButtonWrap>
        <q.Title>오늘의 질문</q.Title>
        <q.Span />
      </q.TopContainer>
      <QuestionCreate />
    </q.Container>
  )
}

export default QuestionCreateContainer
