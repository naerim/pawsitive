import { publicRequest } from '@src/hooks/requestMethods'
import {
  QuestionDetailFetchType,
  QuestionFetchType,
} from '@src/types/components/QuestionType'

export const fetchQuestionBefore = async (userNo: number) => {
  return publicRequest
    .get(`/questions/today/users/${userNo}`)
    .then(res => res.data)
}

export const fetchQuestionSubmit = async (data: QuestionFetchType) => {
  return publicRequest
    .post(`/questions/users/${data.userNo}`, data.form)
    .then(res => {
      res.data
    })
    .catch(error => {
      console.log(error)
      throw new Error('로그인 에러')
    })
}

export const fetchQuestionDetail = async (
  detailData: QuestionDetailFetchType,
) => {
  return publicRequest
    .get(`/questions/${detailData.questionNo}/users/${detailData.userNo}`)
    .then(res => res.data)
}

export const fetchQuestionList = async (userNo: number) => {
  return publicRequest.get(`/questions/users/${userNo}`).then(res => res.data)
}
