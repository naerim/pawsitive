import { ChangeEvent, Dispatch, SetStateAction } from 'react'

export type CreateDogInfoType = {
  name: string | number | number[]
  setName: (e: ChangeEvent<HTMLInputElement>) => void
  kind: string | number | number[]
  setKind: (e: ChangeEvent<HTMLInputElement>) => void
  setIsNaturalized: (e: ChangeEvent<HTMLInputElement>) => void
  color: string | number | number[]
  setColor: (e: ChangeEvent<HTMLInputElement>) => void
  note: string | number | number[]
  setNote: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export type CreateDogMbtiType = {
  mbti: boolean[]
  setMbti: Dispatch<SetStateAction<boolean[]>>
}

export type CreateDogFileType = {
  file: File[]
  setFile: Dispatch<SetStateAction<File[]>>
}
