import { useQuery } from '@tanstack/react-query'
import { fetchDictionaryDetail } from '@src/apis/dictionary'
import DictionaryListItem from '@src/components/Dictionary/DictionaryListItem'
import * as h from '@src/components/style/HomeRecommendDictionaryStyle'

const HomeRecommendDictionary = () => {
  const contentNo = Math.floor(Math.random() * 10) + 1
  const { data, isLoading } = useQuery({
    queryKey: ['HomeRecommendDictionary'],
    queryFn: () => fetchDictionaryDetail(Number(contentNo)),
  })

  return (
    <h.Container>
      {!isLoading && data && (
        <div>
          <h.SubTitle>반려견에 대해 알아볼까요?</h.SubTitle>
          <h.Title>오늘의 반려견 지식</h.Title>

          <h.LinkTag key={data.contentNo} to={`/dictionary/${data.contentNo}`}>
            <DictionaryListItem data={data} />
          </h.LinkTag>
        </div>
      )}
    </h.Container>
  )
}

export default HomeRecommendDictionary
