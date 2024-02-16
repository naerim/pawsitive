import { publicRequest } from '@src/hooks/requestMethods'
import {
  QuestionDetailFetchType,
  QuestionSubmitFetchType,
} from '@src/types/components/QuestionType'

// 등록할 오늘의 질문 상세 조회
export const fetchQuestionBefore = async (userNo: number) => {
  return publicRequest
    .get(`/questions/today/users/${userNo}`)
    .then(res => res.data)
}

// 오늘의 질문 답변 등록
export const fetchQuestionSubmit = async (data: QuestionSubmitFetchType) => {
  return publicRequest.post(`/questions`, data).then(res => res.data)
}

// 등록할 오늘의 질문 상세 조회
export const fetchQuestionDetail = async (
  detailData: QuestionDetailFetchType,
) => {
  return publicRequest
    .get(`/questions/${detailData.questionNo}/users/${detailData.userNo}`)
    .then(res => res.data)
}

// 등록한 오늘의 질문 전체 조회
export const fetchQuestionList = async (userNo: number) => {
  return publicRequest.get(`/questions/users/${userNo}`).then(res => res.data)
}
