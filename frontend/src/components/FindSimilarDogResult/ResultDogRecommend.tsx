import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchKindDogList } from '@src/apis/dog'
import { DogListKindResType, DogListType } from '@src/types/dogType'
import * as r from '@src/components/style/ResultDogRecommendStyle'

const ResultDogRecommend = () => {
  const location = useLocation()
  const { resultData } = location.state
  const sortedResultData = [...resultData].sort(
    (a, b) => b.probability - a.probability,
  )

  const navigate = useNavigate()
  const handleGoDogDetail = (dogNo: number) => {
    navigate(`/dogs/${dogNo}`)
  }
  const handleGoDogList = () => {
    navigate('/dogs')
  }

  const { data } = useQuery<DogListKindResType>({
    queryKey: ['recommendKindDog'],
    queryFn: async () =>
      fetchKindDogList({
        page: 0,
        size: 2,
        sort: ['string'],
        kind: sortedResultData[0].label,
        userNo: 0,
      }),
  })

  return (
    <r.Container>
      <r.SubTitle>나와 닮은 강아지</r.SubTitle>
      <r.Title>당신과 비슷한 강아지 여기 있어요!</r.Title>
      <r.Wrap>
        {data &&
          data.content.map((item: DogListType) => (
            <r.Item
              key={item.dogNo}
              onClick={() => handleGoDogDetail(item.dogNo)}
            >
              {item.file && item.file.length > 0 && (
                <img src={item.file} alt="" />
              )}
              <r.ItemTitle>{item.name}</r.ItemTitle>
              <r.ItemSubTitle>
                {item.kind}, {item.age}살
              </r.ItemSubTitle>
              <r.ItemSubTitle>
                {item.neutralized ? '중성화O' : '중성화X'}
              </r.ItemSubTitle>
            </r.Item>
          ))}
      </r.Wrap>
      <r.Button type="button" onClick={handleGoDogList}>
        더 많은 강아지 찾아보기
      </r.Button>
    </r.Container>
  )
}

export default ResultDogRecommend
