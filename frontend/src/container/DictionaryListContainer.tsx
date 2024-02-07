import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchDictionaryList } from '@src/apis/dictionary'
import {
  DictionaryListParamsType,
  DictionaryResType,
} from '@src/types/components/DictionaryType'
import DictionaryListSection from '@src/components/Dictionary/DictionaryListSection'
import DictionaryCategorySection from '@src/components/Dictionary/DictionaryCategorySection'
import * as c from '@src/container/style/DictionaryListContainerStyle'

// 무한 스크롤 아직 구현 못함
const DictionaryListContainer = () => {
  const [category, setCategory] = useState(0)

  const { data, isLoading, refetch } = useQuery<DictionaryResType>({
    queryKey: ['dictionaryList'],
    queryFn: async () => {
      const params: DictionaryListParamsType = {
        page: 0,
        size: 30,
        sort: ['string'],
        ...(category !== 0 && { categoryNo: category }),
      }
      return fetchDictionaryList(params)
    },
  })

  useEffect(() => {
    refetch().then(r => r)
  }, [category, refetch])

  return (
    <c.Container>
      <c.Wrap>
        <c.Top>
          <p>펫과사전</p>
        </c.Top>
        <DictionaryCategorySection
          category={category}
          setCategory={setCategory}
        />
        {isLoading || !data ? (
          <p>Loading...</p>
        ) : (
          <div>
            <DictionaryListSection data={data.content} />
          </div>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default DictionaryListContainer
