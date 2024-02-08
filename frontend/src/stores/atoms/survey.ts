import { atom } from 'jotai'
import { SurveyFormType } from '@src/types/surveyType'

export const surveyDataAtom = atom<SurveyFormType>({
  No1: '',
  No2: '',
  No3: '',
  No4: '',
  No5: '',
  No6: false,
  No7: false,
  No8: '',
  No9: '',
  No10: '',
  No11: '',
  No12: '',
  No13: false,
  No14: '',
  No15: '',
  No16: false,
  No17: '',
  No18: '',
  No19: '',
  No20: false,
})

export const surveyStepAtom = atom<number>(1)
