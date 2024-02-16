import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { fetchQuestionBefore, fetchQuestionSubmit } from '@src/apis/question'
import { userAtom } from '@src/stores/atoms/user'
import { QuestionSubmitFetchType } from '@src/types/components/QuestionType'
import * as c from '@src/components/style/QuestionCreateStyle'

const QuestionCreate = () => {
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue
  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ['QuestionDetail'],
    queryFn: () => fetchQuestionBefore(userNo),
  })

  const [submitData, setSubmitData] = useState<QuestionSubmitFetchType>({
    userNo,
    questionNo: 0,
    answerContent: '',
  })

  const { mutate } = useMutation({
    mutationKey: ['PostQuestion'],
    mutationFn: fetchQuestionSubmit,
    onSuccess() {
      navigate(`/questions/${submitData.questionNo}`)
    },
    onError() {
      console.log('토큰갱신 api 에러')
    },
  })

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitData({ ...submitData, answerContent: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(submitData)
  }

  useEffect(() => {
    if (data) {
      setSubmitData(prevSubmitData => ({
        ...prevSubmitData,
        questionNo: data.questionNo,
      }))
    }
  }, [data])

  return (
    <c.Container>
      {!isLoading ? (
        <c.Form onSubmit={handleSubmit}>
          <c.Header>
            <c.Number>Q{data.questionNo}.</c.Number>
            <c.Content>{data.content}</c.Content>
          </c.Header>
          <c.Body>
            <c.Answer
              value={submitData.answerContent}
              onChange={handleContentChange}
              placeholder="답변"
            />
            <c.Button type="submit">저장하기</c.Button>
          </c.Body>
        </c.Form>
      ) : (
        <div>로딩중입니다.</div>
      )}
    </c.Container>
  )
}

export default QuestionCreate
