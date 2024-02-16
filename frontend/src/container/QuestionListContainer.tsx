import { useNavigate } from 'react-router-dom'
import QuestionListSection from '@src/components/Question/QuestionListSection'
import * as q from '@src/container/style/QuestionListContainerStyle'

const QuestionListContainer = () => {
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
      <QuestionListSection />
    </q.Container>
  )
}

export default QuestionListContainer
