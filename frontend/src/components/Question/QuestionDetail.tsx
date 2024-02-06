import * as c from '@src/components/style/QuestionDetailStyle'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { fetchQuestionDetail } from '@src/apis/question'
import { useParams } from 'react-router-dom'

const QuestionDetail = () => {
  const { questionNo } = useParams()
  const no = Number(questionNo)
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue
  const fetchData = {
    questionNo: no,
    userNo,
  }

  const { data, isLoading } = useQuery({
    queryKey: ['QuestionDetail'],
    queryFn: () => fetchQuestionDetail(fetchData),
  })

  return (
    <c.Container>
      {!isLoading ? (
        <c.Body>
          <c.Number>{data.questionNo}번 질문</c.Number>
          <c.Content>{data.questionContent}</c.Content>
          <c.Answer>{data.answerContent}</c.Answer>
          <c.Date>{data.createdAt}</c.Date>
        </c.Body>
      ) : (
        <div>로딩중입니다..</div>
      )}
    </c.Container>
  )
}

export default QuestionDetail
