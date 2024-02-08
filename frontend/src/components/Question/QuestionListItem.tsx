import { QuestionType } from '@src/types/components/QuestionType'

const QuestionListItem = (props: { item: QuestionType }) => {
  const { item } = props

  // answerContent
  // createdAt
  // questionContent
  // questionNo

  return (
    <div>
      <div>{item.questionNo}번 질문</div>
      <div>{item.questionContent}</div>
      <div>{item.answerContent}</div>
    </div>
  )
}

export default QuestionListItem
