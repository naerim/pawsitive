import QuestionCreate from '@src/components/Question/QuestionCreate'
import * as q from '@src/container/style/QuestionCreateContainerStyle'

const QuestionCreateContainer = () => {
  return (
    <q.Container>
      <div>오늘의 질문</div>
      <QuestionCreate />
    </q.Container>
  )
}

export default QuestionCreateContainer
