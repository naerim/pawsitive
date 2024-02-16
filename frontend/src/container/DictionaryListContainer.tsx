import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { DictionaryCategoryAtom } from '@src/stores/atoms/dictionary'
import { fetchDictionaryList } from '@src/apis/dictionary'
import {
  DictionaryListParamsType,
  DictionaryResType,
} from '@src/types/components/DictionaryType'
import DictionaryListSection from '@src/components/Dictionary/DictionaryListSection'
import DictionaryCategorySection from '@src/components/Dictionary/DictionaryCategorySection'
import * as c from '@src/container/style/DictionaryListContainerStyle'

const DictionaryListContainer = () => {
  const navigate = useNavigate()

  const handlePrevStep = () => {
    navigate('/')
  }

  const [category] = useAtom(DictionaryCategoryAtom)

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
        <c.TopContainer>
          <c.BackButtonWrap onClick={handlePrevStep}>
            <img src="/icon/icon_gray_arrow_left.png" alt="" />
          </c.BackButtonWrap>
          <c.Title>펫과사전</c.Title>
          <c.Span />
        </c.TopContainer>
        <DictionaryCategorySection />
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
