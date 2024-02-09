import * as h from '@src/components/style/HomeRecommendDogStyle'
import LightColorMoveCard from '@src/common/LightColorMoveCard'
import { useQuery } from '@tanstack/react-query'
import { fetchRecommendDogs } from '@src/apis/dog'
import { DogListType } from '@src/types/dogType'
import { useNavigate } from 'react-router-dom'

const HomeRecommendDog = () => {
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['recommendDog'],
    queryFn: () => fetchRecommendDogs(2),
  })

  return (
    <h.Container>
      <h.SubTitle>나와 잘 맞는 강아지</h.SubTitle>
      <h.Title>저와 함께 행복하게 살아요!</h.Title>
      <h.Wrap>
        {!isLoading ? (
          data &&
          data.map((item: DogListType, index: number) => (
            <h.DogButton
              onClick={() => {
                navigate(`/dogs/${item.dogNo}`)
              }}
              key={index}
            >
              <h.Item key={item.dogNo || index}>
                <img src={item.file} alt="" />

                <h.ItemTitle>{item.name}</h.ItemTitle>
                <h.ItemSubTitle>
                  {item.kind}, {item.age}살
                </h.ItemSubTitle>
                <h.ItemSubTitle>
                  {item.neutralized ? '중성화O' : '중성화X'}
                </h.ItemSubTitle>
              </h.Item>
            </h.DogButton>
          ))
        ) : (
          <div>로딩중</div>
        )}
      </h.Wrap>
      <LightColorMoveCard title="더 많은 강아지 찾아보기" url="/dogs" />
    </h.Container>
  )
}
export default HomeRecommendDog
