import { publicRequest } from '@src/hooks/requestMethods'
import { DictionaryItemType } from '@src/types/components/DictionaryType'

export const fetchDictionaryList = async (): Promise<DictionaryItemType[]> => {
  const response = await publicRequest.get('/contents')
  return response.data
}

export const fetchDictionaryDetail = async (
  contentNo: number,
): Promise<DictionaryItemType> => {
  const response = await publicRequest.get(`/contents/${contentNo}`)
  return response.data
}
