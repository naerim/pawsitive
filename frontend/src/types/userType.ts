export type UserType = {
  user_id: number
  email: string
  name: string
  password: string
  address: string
  birth: string
  gender: string
  type: number
  stage: number
}

export type AfterAdoptionUserInfo = {
  adoptedDays: number
  answerCount: number
  memoryCount: number
}

export type JoinUserType = {
  name: string
  role: string
  email: string
  pw: string
  birth: string
  gender: string
  address: string
  type: number
}

export type JoinUserResponseType = {
  userNo: number
  email: string
  name: string
  address: string
  role: string
  birth: string
  gender: string
  type: number
  stage: number
}

export type LoginUserType = {
  id: string
  password: string
}

export type LoginUserResponseType = {
  grantType: string
  accessToken: string
  refreshToken: string
}
