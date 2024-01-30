import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { DictionaryItemType } from '@src/types/components/DictionaryType'
import { fetchDictionaryDetail } from '@src/apis/dictionary'
import DictionaryDetail from '@src/components/Dictionary/DictionaryDetail'

const DictionaryDetailContainer = () => {
  const { contentNo } = useParams<{ contentNo: string }>()

  const { data, isLoading, error } = useQuery<DictionaryItemType | null>({
    queryKey: ['dictionaryDetail'],
    queryFn: () => fetchDictionaryDetail(Number(contentNo)),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error fetching data</div>
  }

  return <DictionaryDetail item={data!} />
}

export default DictionaryDetailContainer
