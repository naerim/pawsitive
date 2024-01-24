import * as h from '@src/components/style/HomeRecommendDogStyle'
import ClosePossibleCard from '@src/common/ClosePossibleCard'
import { useQuery } from '@tanstack/react-query'
import { DogDetailInfoType } from '@src/types/components/DogDetailType'
import { fetchDogRecommend } from '@src/apis/recommend'

const HomeRecommendDog = () => {
  const { isLoading, data } = useQuery<DogDetailInfoType>({
    queryKey: ['dogRecommend'],
    queryFn: () => fetchDogRecommend('admin'),
  })
  return (
    <h.Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ClosePossibleCard>
          <div>천세진님의 가족이 되고 싶어요.</div>
          {data && (
            <>
              <div>{data.name}</div>
              <div>{data.description}</div>
            </>
          )}
        </ClosePossibleCard>
      )}
    </h.Container>
  )
}

export default HomeRecommendDog
