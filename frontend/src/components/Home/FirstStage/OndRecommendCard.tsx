import * as o from '@src/components/Home/_style/OndRecommendCardStyle'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { useQuery } from '@tanstack/react-query'
import { fetchRecommendDogCard } from '@src/apis/dog'
import { useNavigate } from 'react-router-dom'

const OndRecommendCard = () => {
  const user = useAtomValue(userAtom)
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['recommendDogCard'],
    queryFn: () => fetchRecommendDogCard(user.userNo),
  })

  return (
    <div>
      {!isLoading && data && (
        <o.Container>
          <o.SubTitle>유기견 공고 추천</o.SubTitle>
          <o.Title>{user.name}님의 가족이 되고 싶어요</o.Title>
          <o.Image src={data.file} alt="" />

          <o.Button
            type="button"
            onClick={() => {
              navigate(`/dogs/${data.dogNo}`)
            }}
          >
            해당 공고 보러가기
          </o.Button>
        </o.Container>
      )}
    </div>
  )
}

export default OndRecommendCard
