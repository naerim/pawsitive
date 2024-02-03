import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { JoinUserType, UserType } from '@src/types/userType'

const currentUser = {
  user_id: 0,
  email: 'ssafy@gmail.com',
  name: '김싸피',
  password: '1234',
  address: '광주광역시 광산구 장덕동 1160-11',
  birth: '991119',
  gender: '여성',
  type: 0,
  stage: 0,
}

export const userAtom = atomWithStorage<UserType>('currentUser', currentUser)

export const signUpDataAtom = atom<JoinUserType>({
  name: '',
  role: '',
  email: '',
  pw: '',
  birth: '',
  gender: '',
  address: '',
  type: 1,
})
export const signUpStepAtom = atom<number>(1)
