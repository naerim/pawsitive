import * as c from '@src/components/style/QuestionListStyle'
import { useQuery } from '@tanstack/react-query'
import { fetchQuestionList } from '@src/apis/question'
import { useAtomValue } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { QuestionType } from '@src/types/components/QuestionType'

const QuestionList = () => {
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue
  const { data, isLoading } = useQuery({
    queryKey: ['QuestionList'],
    queryFn: () => fetchQuestionList(userNo),
  })
  return (
    <c.Container>
      {!isLoading ? (
        <c.Body>
          {data.map((item: QuestionType) => (
            <c.Card key={item.questionNo}>
              <c.Number>{item.questionNo}번 질문</c.Number>
              <c.Content>{item.questionContent}</c.Content>
              <c.Answer>{item.answerContent}</c.Answer>
            </c.Card>
          ))}
        </c.Body>
      ) : (
        <div>로딩중입니다..</div>
      )}
    </c.Container>
  )
}

export default QuestionList
