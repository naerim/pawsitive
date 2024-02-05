import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { JoinUserErrorType, JoinUserType, UserType } from '@src/types/userType'

const currentUser = {
  userNo: 0,
  email: '',
  name: '',
  password: '',
  address: '',
  birth: '',
  gender: '',
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
  type: 0,
})

export const signUpPwCheckAtom = atom<string>('')
export const signUpStepAtom = atom<number>(1)

export const signUpErrorAtom = atom<JoinUserErrorType>({
  name: '',
  dob: '',
  emailVerify: '',
  pwCheck: '',
})
