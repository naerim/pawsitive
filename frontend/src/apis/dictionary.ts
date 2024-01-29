import { publicRequest } from '@src/hooks/requestMethods'
import { DictionaryItemType } from '@src/types/components/DictionaryType'

export const fetchDictionaryList = async (): Promise<DictionaryItemType[]> => {
  const response = await publicRequest.get('api/v1/contents')
  return response.data
}
