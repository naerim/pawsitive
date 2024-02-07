import { Dispatch, SetStateAction } from 'react'

export type DictionaryItemType = {
  contentNo: number
  contentCategoryNo: number
  contentCategoryName: string
  title: string
  content: string
  image: string
}

export type DictionaryListParamsType = {
  page: number
  size: number
  sort: string[]
  categoryNo?: number
}

export type DictionaryCategoryType = {
  category: number
  setCategory: Dispatch<SetStateAction<number>>
}

export type DictionaryResType = {
  content: DictionaryItemType[]
  next: boolean
  number: number
  previous: boolean
  totalPages: number
}
