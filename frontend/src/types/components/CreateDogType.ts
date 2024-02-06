import { Dispatch, SetStateAction } from 'react'

export type CreateDogInfoType = {
  userNo: number
  name: string
  kind: string
  isNaturalized: boolean
  note: string
  eq: boolean
  si: boolean
  aw: boolean
  fc: boolean
  sex: string
  age: number
}

export type CreateDogFileType = {
  file: File[]
  setFile: Dispatch<SetStateAction<File[]>>
}
