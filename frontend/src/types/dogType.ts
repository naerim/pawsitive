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
  userLiked: boolean
}

export type DogListType = {
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
  statusNo: number
  file: string
  sex: string
  neutralized: boolean
}

export type BasicDogListParamsType = {
  page: number
  size: number
  sort: string[]
  kind: string[]
  sex: number
  neutralized: number
  userNo: number
}

// 닮은 강아지상 찾기 - 유기견 품종별 추천
export type DogListKindParamsType = {
  page: number
  size: number
  sort: string[]
  kind: string
  userNo: number
}

export type DogListKindResType = {
  content: DogListType[]
  totalPages: number
  number: number
  previous: boolean
  next: boolean
}

// 유기견 찜 등록
export type LikeDogsParamsType = {
  userNo: number
  email: string
  dogNo: number
}

export type LikeDogsResType = {
  dogNo: number
  totalLikeCount: number
}
