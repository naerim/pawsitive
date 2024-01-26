import { ChangeEvent } from 'react'

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
