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
