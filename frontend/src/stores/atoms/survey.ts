import { atom } from 'jotai'
import { SurveyFormType } from '@src/types/surveyType'

export const surveyDataAtom = atom<SurveyFormType>({
  userNo: 0,
  accommodationType: '',
  carer: '',
  reason: '',
  familyType: '',
  familyIntroduce: '',
  familyAdd: '',
  familyAgree: '',
  aloneTime: '',
  temporaryResidence: '',
  raiseHistory: '',
  raiseTerm: '',
  petRoute: '',
  petSociability: '',
  raiseNoReason: '',
  personality: '',
  training: '',
  hospital: '',
  expenditure: '',
  foreverResponsibility: '',
})

export const surveyStepAtom = atom<number>(1)
