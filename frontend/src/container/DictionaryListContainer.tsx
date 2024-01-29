import { useEffect, useState } from 'react'
import { fetchDictionaryList } from '@src/apis/dictionary'
import DictionaryList from '@src/components/Dictionary/DictionaryList'
import { DictionaryItemType } from '@src/types/components/DictionaryType'

const DictionaryListContainer = () => {
  const [dictionaryList, setDictionaryList] = useState<DictionaryItemType[]>([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDictionaryList()
        setDictionaryList(data)
      } catch (error) {
        console.error('Error fetching dictionary list:', error)
      }
    }

    getData()
  }, [])

  return <DictionaryList data={dictionaryList} />
}

export default DictionaryListContainer
