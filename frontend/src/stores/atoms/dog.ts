import { atom } from 'jotai'
import { CreateDogInfoType } from '@src/types/components/CreateDogType'
import { DogType } from '@src/types/dogType'

export const dogDetailAtom = atom<DogType>({
  dogNo: 0,
  userNo: 0,
  userName: '',
  name: '',
  kind: '',
  createdAt: '',
  age: 0,
  note: '',
  hit: 0,
  mbti: '',
  statusNo: 0,
  files: [],
  sex: '',
  neutralized: false,
  address: '',
})

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
