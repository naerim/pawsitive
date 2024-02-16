export type QuestionFormType = {
  questionNo: number
  answerContent: string
}

export type QuestionFetchType = {
  form: QuestionFormType
  userNo: number
}

export type QuestionType = {
  userNo: number
  questionNo: number
  questionContent: string
  answerNo: number
  answerContent: string
  createdAt: number
}

export type QuestionDetailFetchType = {
  questionNo: number
  userNo: number
}

export type QuestionSubmitFetchType = {
  userNo: number
  questionNo: number
  answerContent: string
}
