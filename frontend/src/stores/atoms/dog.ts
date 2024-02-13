import { atom } from 'jotai'
import { CreateDogInfoType } from '@src/types/components/CreateDogType'
import { BasicDogListParamsType, DogType } from '@src/types/dogType'

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
  userLiked: false,
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
  age: 0,
})

export const dogListParamsAtom = atom<BasicDogListParamsType>({
  page: 1,
  size: 100,
  sort: ['string'],
  kind: [
    '말티즈',
    '비숑',
    '치와와',
    '푸들',
    '포메라니안',
    '시바견',
    '시츄',
    '도베르만',
    '리트리버',
    '기타',
  ],
  sex: 0,
  neutralized: 0,
  userNo: 0,
})

export const dogLikedAtom = atom<boolean>(false)
