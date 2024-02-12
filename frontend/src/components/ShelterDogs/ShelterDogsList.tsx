import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { useQuery } from '@tanstack/react-query'
import { fetchSameShelterDogs } from '@src/apis/dog'
import { BasicDogType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import * as s from '@src/components/style/ShelterDogListStyle'
import { useNavigate } from 'react-router-dom'

const ShelterDogsList = () => {
  const user = useAtomValue(userAtom)
  const navigate = useNavigate()
  const { data, isLoading } = useQuery<BasicDogType[]>({
    queryKey: ['MyShelterDogList'],
    queryFn: async () =>
      fetchSameShelterDogs({
        shelterNo: user.userNo,
        num: 100,
      }),
  })

  const goBack = () => {
    navigate(-1)
  }

  return (
    <s.Container>
      <s.HeaderDiv>
        <s.BackButton aria-label="Previous Step">
          <img src="/icon/icon_gray_arrow_left.png" alt="" onClick={goBack} />
        </s.BackButton>
        {/* <s.Header>{user.name}님의 공고중인 강아지들</s.Header> */}
      </s.HeaderDiv>
      <s.DogListContainer>
        {!isLoading ? (
          data &&
          data.map((item: BasicDogType) => (
            <BasicDogInfoCard key={item.dogNo} dogInfo={item} />
          ))
        ) : (
          <div>로딩중</div>
        )}
      </s.DogListContainer>
    </s.Container>
  )
}

export default ShelterDogsList
