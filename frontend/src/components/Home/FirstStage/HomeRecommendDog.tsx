import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { fetchRecommendDogs } from '@src/apis/dog'
import { RecommendDogResType } from '@src/types/dogType'
import LightColorMoveCard from '@src/common/LightColorMoveCard'
import * as h from '@src/components/style/HomeRecommendDogStyle'

const HomeRecommendDog = () => {
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue
  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ['recommendDog'],
    queryFn: () => fetchRecommendDogs(userNo),
  })

  return (
    <h.Container>
      <h.SubTitle>나와 잘 맞는 강아지</h.SubTitle>
      <h.Title>저와 함께 행복하게 살아요!</h.Title>
      <h.Wrap>
        {!isLoading ? (
          data &&
          data.map((item: RecommendDogResType) => (
            <h.DogButton
              onClick={() => {
                navigate(`/dogs/${item.dogNo}`)
              }}
              key={item.dogNo}
            >
              <h.Item key={item.dogNo}>
                <img src={item.file} alt="" />
                <h.ItemTitle>{item.name}</h.ItemTitle>
                <h.ItemSubTitle>
                  {item.sex === 'M' ? '수컷' : '암컷'} ∙ 중성화
                  {item.neutralized ? 'O' : 'X'}
                </h.ItemSubTitle>
                <h.ItemSubTitle>
                  {item.age}살 ∙ {item.kind}
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
