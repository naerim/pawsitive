import QuestionListSection from '@src/components/Question/QuestionListSection'
import * as q from '@src/container/style/QuestionListContainerStyle'

const QuestionListContainer = () => {
  return (
    <q.Container>
      <div>오늘의 질문</div>
      <QuestionListSection />
    </q.Container>
  )
}

export default QuestionListContainer
