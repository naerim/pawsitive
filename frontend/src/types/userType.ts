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
  email: string
  password: string
  name: string
  address: string
  role: string
}

export type JoinUserResponseType = {
  address: string
  email: string
  image: string
  name: string
  password: string
  role: string
  userNo: number
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
