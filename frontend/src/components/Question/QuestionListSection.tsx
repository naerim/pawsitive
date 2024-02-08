import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { useAtomValue } from 'jotai/index'
import { fetchQuestionList } from '@src/apis/question'
import { userAtom } from '@src/stores/atoms/user'
import { QuestionType } from '@src/types/components/QuestionType'
import QuestionListItem from '@src/components/Question/QuestionListItem'
import * as q from '@src/components/style/QuestionListSectionStyle'

const QuestionListSection = () => {
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue

  const { data } = useQuery({
    queryKey: ['QuestionListSection'],
    queryFn: () => fetchQuestionList(userNo),
  })

  return (
    <q.Container>
      <div>
        {data &&
          data.map((item: QuestionType) => (
            <Link key={item.questionNo} to={`/questions/${item.questionNo}`}>
              <QuestionListItem item={item} />
            </Link>
          ))}
      </div>
    </q.Container>
  )
}

export default QuestionListSection
