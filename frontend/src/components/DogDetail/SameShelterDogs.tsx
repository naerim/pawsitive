import * as s from '@src/components/DogDetail/_style/SameShelterDogsStyle'
import { useQuery } from '@tanstack/react-query'
import { fetchBasicDogList } from '@src/apis/dog'
import { BasicDogType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import { useNavigate } from 'react-router-dom'

const SameShelterDogs = () => {
  const navigate = useNavigate()

  const { data, isLoading } = useQuery<BasicDogType[]>({
    queryKey: ['basicDogList'],
    queryFn: async () => {
      const result = await fetchBasicDogList({
        page: 1,
        size: 2,
        sort: ['string'],
      })
      return result.content
    },
  })

  const goDogList = () => navigate('/dogs')

  return (
    <s.Container>
      <s.SubTitle>같은 보호소 강아지</s.SubTitle>
      <s.Title>같은 보호소에서 지내고 있어요</s.Title>
      <s.Wrap>
        {!isLoading ? (
          data &&
          data.map((item: BasicDogType) => (
            <BasicDogInfoCard key={item.dogNo} dogInfo={item} />
          ))
        ) : (
          <div>로딩중</div>
        )}
      </s.Wrap>
      <s.Button onClick={goDogList}>더 많은 강아지 찾아보기</s.Button>
    </s.Container>
  )
}

export default SameShelterDogs
