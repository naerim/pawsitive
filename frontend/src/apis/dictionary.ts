import { publicRequest } from '@src/hooks/requestMethods'
import {
  DictionaryItemType,
  DictionaryListParamsType,
} from '@src/types/components/DictionaryType'
import queryString from 'query-string'

export const fetchDictionaryList = async (params: DictionaryListParamsType) => {
  return publicRequest
    .get(`/contents?${queryString.stringify(params)}`)
    .then(res => res.data)
    .catch(error => console.log('펫과사전 조회 실패', error))
}

export const fetchDictionaryDetail = async (
  contentNo: number,
): Promise<DictionaryItemType> => {
  const response = await publicRequest.get(`/contents/${contentNo}`)
  return response.data
}
