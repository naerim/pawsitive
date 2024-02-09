import { atom } from 'jotai'
import { SurveyFormType } from '@src/types/surveyType'

export const surveyDataAtom = atom<SurveyFormType>({
  user_no: 0,
  accommodation_type: '',
  carer: '',
  reason: '',
  family_type: '',
  family_introduce: '',
  family_add: '',
  family_agree: '',
  alone_time: '',
  temporary_residence: '',
  raise_history: '',
  raise_term: '',
  raise_no_reason: '',
  pet_sociability: '',
  pet_route: '',
  personality: '',
  training: '',
  hospital: '',
  expenditure: '',
  forever_responsibility: '',
})

export const surveyStepAtom = atom<number>(1)
