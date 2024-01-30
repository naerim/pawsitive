import { useQuery } from '@tanstack/react-query'
import { DictionaryItemType } from '@src/types/components/DictionaryType'
import DictionaryList from '@src/components/Dictionary/DictionaryList'
import { fetchDictionaryList } from '@src/apis/dictionary'

const DictionaryListContainer = () => {
  const { data, isLoading, error } = useQuery<DictionaryItemType[]>({
    queryKey: ['dictionaryList'],
    queryFn: fetchDictionaryList,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.error('Error fetching dictionary list:', error)
    return <div>Error fetching data</div>
  }

  return <DictionaryList data={data!} />
}

export default DictionaryListContainer
