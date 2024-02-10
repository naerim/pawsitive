import QuestionDetail from '@src/components/Question/QuestionDetail'
import * as q from '@src/container/style/QuestionDetailContainerStyle'

const QuestionDetailContainer = () => {
  return (
    <q.Container>
      <div>오늘의 질문</div>
      <QuestionDetail />
    </q.Container>
  )
}

export default QuestionDetailContainer
