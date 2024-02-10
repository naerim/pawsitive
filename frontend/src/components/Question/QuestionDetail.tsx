import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useAtomValue } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { fetchQuestionDetail } from '@src/apis/question'
import * as c from '@src/components/style/QuestionDetailStyle'

const QuestionDetail = () => {
  const { questionNo } = useParams()
  const no = Number(questionNo)
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue
  const fetchData = {
    questionNo: no,
    userNo,
  }

  const { data } = useQuery({
    queryKey: ['QuestionDetail'],
    queryFn: () => fetchQuestionDetail(fetchData),
  })

  return (
    <div>
      {data ? (
        <c.Container>
          <c.Header>
            <c.Number>Q{data.questionNo}.</c.Number>
            <c.Content>{data.questionContent}</c.Content>
          </c.Header>
          <c.Body>
            <c.Answer>{data.answerContent}</c.Answer>
          </c.Body>
        </c.Container>
      ) : (
        <div>로딩중입니다.</div>
      )}
    </div>
  )
}

export default QuestionDetail
