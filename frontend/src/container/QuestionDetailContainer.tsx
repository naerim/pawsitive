import { useNavigate } from 'react-router-dom'
import QuestionDetail from '@src/components/Question/QuestionDetail'
import * as q from '@src/container/style/QuestionDetailContainerStyle'

const QuestionDetailContainer = () => {
  const navigate = useNavigate()

  const handlePrevStep = () => {
    navigate('/questions')
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
      <QuestionDetail />
    </q.Container>
  )
}

export default QuestionDetailContainer
