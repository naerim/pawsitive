import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchQuestionBefore, fetchQuestionSubmit } from '@src/apis/question'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import * as c from '@src/components/style/QuestionCreateeStyle'
import React, { useEffect, useState } from 'react'
import {
  QuestionFetchType,
  QuestionFormType,
} from '@src/types/components/QuestionType'
import { useNavigate } from 'react-router-dom'

const QuestionCreate = () => {
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue
  const navigate = useNavigate()

  const [submitData, setSubmitData] = useState<QuestionFormType>({
    questionNo: 0,
    answerContent: '',
  })

  const [subDataUserNo, setSubDataUserNo] = useState<QuestionFetchType>({
    form: submitData,
    userNo,
  })

  const { data, isLoading } = useQuery({
    queryKey: ['QuestionDetail'],
    queryFn: () => fetchQuestionBefore(userNo),
  })

  const { mutate } = useMutation({
    mutationKey: ['PostQuestion'],
    mutationFn: fetchQuestionSubmit,
    onSuccess() {
      navigate(`/questions/${data.questionNo}`)
    },
    onError() {
      console.log('토큰갱신 api 에러')
    },
  })

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitData({ ...submitData, answerContent: e.target.value })
  }

  useEffect(() => {
    if (data) {
      setSubmitData({
        ...submitData,
        questionNo: data.questionNo,
      })
    }
  }, [data])

  useEffect(() => {
    setSubDataUserNo({
      ...subDataUserNo,
      form: submitData,
    })
  }, [submitData])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('들어옴')
    e.preventDefault()
    mutate(subDataUserNo)
  }

  return (
    <c.Container>
      {!isLoading ? (
        <c.Form onSubmit={handleSubmit}>
          <c.Number>{data.questionNo}번 질문</c.Number>
          <c.Content>{data.content}</c.Content>
          <c.Input
            value={submitData.answerContent}
            onChange={handleContentChange}
          />
          <c.Button type="submit">제출</c.Button>
        </c.Form>
      ) : (
        <div>로딩중입니다..</div>
      )}
    </c.Container>
  )

  // <div>디테일비포</div>
}

export default QuestionCreate
