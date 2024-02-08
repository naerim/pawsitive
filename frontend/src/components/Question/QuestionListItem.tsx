import { QuestionType } from '@src/types/components/QuestionType'
import * as q from '@src/components/style/QuestionListItemStyle'

const QuestionListItem = (props: { item: QuestionType }) => {
  const { item } = props

  return (
    <q.Container>
      <q.Number>Q{item.questionNo}.</q.Number>
      <q.Title>{item.questionContent}</q.Title>
      <q.Icon src="/icon/icon_black_arrow_right.png" alt="" />
    </q.Container>
  )
}

export default QuestionListItem
