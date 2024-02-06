import { atom } from 'jotai'
import { CreateDogInfoType } from '@src/types/components/CreateDogType'

export const createDogStepAtom = atom<number>(1)

export const createDogInfoAtom = atom<CreateDogInfoType>({
  userNo: 1,
  name: '',
  kind: '',
  isNaturalized: true,
  note: '',
  eq: true,
  si: true,
  aw: true,
  fc: true,
  sex: 'M',
  age: 2021,
})
