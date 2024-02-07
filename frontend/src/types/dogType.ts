export type DogType = {
  dogNo: number
  userNo: number
  userName: string
  name: string
  kind: string
  createdAt: string
  age: number
  note: string
  hit: number
  mbti: string
  statusNo: number
  files: string[]
  sex: string
  neutralized: boolean
  address: string
}

export type HomeRecommendDogType = {
  age: number
  dogNo: number
  file: string
  kind: string
  name: string
  neutralized: boolean
  sex: string
  statusNo: number
}

export type BasicDogType = {
  dogNo: number
  name: string
  kind: string
  age: number
  statusName: string
  statusNo: number
  image: string
  sex: string
  neutralized: boolean
}

export type BasicDogListParamsType = {
  page: number
  size: number
  sort: string[]
}
