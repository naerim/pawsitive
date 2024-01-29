import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DictionaryDetail from '@src/components/Dictionary/DictionaryDetail'
import { fetchDictionaryDetail } from '@src/apis/dictionary'
import { DictionaryItemType } from '@src/types/components/DictionaryType'

const DictionaryDetailContainer = () => {
  const [detailData, setDetailData] = useState<DictionaryItemType | null>(null)
  const { contentNo } = useParams<{ contentNo: string }>()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchDictionaryDetail(Number(contentNo))
        setDetailData(data)
      } catch (error) {
        console.error('Error fetching dictionary detail:', error)
      }
    }

    getData()
  }, [contentNo])

  return (
    <div>
      <DictionaryDetail item={detailData} />
    </div>
  )
}

export default DictionaryDetailContainer
