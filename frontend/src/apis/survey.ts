import { SurveyFormType } from '@src/types/surveyType'
import { publicRequest } from '@src/hooks/requestMethods'

export const fetchSurveySubmit = (
  Data: SurveyFormType,
): Promise<SurveyFormType> => {
  return publicRequest
    .post(`/users/survey`, Data)
    .then(res => res.data)
    .catch(error => {
      console.log(error)
      throw new Error('입양 설문 등록 에러')
    })
}

export const fetchSurveyGet = (num: number) => {
  return publicRequest
    .get(`/users/survey?userNo=${num}`)
    .then(res => res.data)
    .catch(error => {
      console.log(error)
      throw new Error('유저 입양 설문 조회 에러')
    })
}
