import * as s from '@src/components/DogDetail/style/SameShelterDogsStyle'
import { useQuery } from '@tanstack/react-query'
import { fetchSameShelterDogs } from '@src/apis/dog'
import { BasicDogType, DogType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import { useNavigate } from 'react-router-dom'

const SameShelterDogs = (props: { dogDetail: DogType }) => {
  const { dogDetail } = props
  const navigate = useNavigate()
  const fetchNumber = {
    shelterNo: dogDetail.userNo,
    num: 2,
    status: 0,
  }
  const { data, isLoading } = useQuery<BasicDogType[]>({
    queryKey: ['basicDogList'],
    queryFn: async () => fetchSameShelterDogs(fetchNumber),
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
