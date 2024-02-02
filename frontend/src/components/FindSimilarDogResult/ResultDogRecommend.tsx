import * as r from '@src/components/style/ResultDogRecommendStyle'
import { useQuery } from '@tanstack/react-query'
import { fetchRecommendDogs } from '@src/apis/dog'
import { DogType } from '@src/types/dogType'
import { useNavigate } from 'react-router-dom'

const ResultDogRecommend = () => {
  const navigate = useNavigate()
  const goDogs = () => navigate('/dogs')

  const { data } = useQuery({
    queryKey: ['recommendDog'],
    queryFn: () => fetchRecommendDogs(2),
  })

  return (
    <r.Container>
      <r.SubTitle>나와 닮은 강아지</r.SubTitle>
      <r.Title>당신과 비슷한 강아지 여기 있어요!</r.Title>
      <r.Wrap>
        {data &&
          data.map((item: DogType, index: number) => (
            <r.Item key={item.dogNo || index}>
              {item.images && item.images.length > 0 && (
                <img src={item.images[0]} alt="" />
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
      <r.Button type="button" onClick={goDogs}>
        더 많은 강아지 찾아보기
      </r.Button>
    </r.Container>
  )
}

export default ResultDogRecommend
