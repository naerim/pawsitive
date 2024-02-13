import styled from 'styled-components'
import DogFileSection from '@src/components/DogDetail/DogFileSection'
import ShelterName from '@src/components/DogDetail/ShelterName'
import DogAdditionalInfo from '@src/components/DogDetail/DogAdditionalInfo'
import ChatStartButton from '@src/components/DogDetail/ChatStartButton'
import TipSection from '@src/components/DogDetail/TipSection'
import ShelterInfoSection from '@src/components/DogDetail/ShelterInfoSection'
import SameShelterDogs from '@src/components/DogDetail/SameShelterDogs'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { DogType } from '@src/types/dogType'
import { fetchDogDetails } from '@src/apis/dog'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { dogDetailAtom, dogLikedAtom } from '@src/stores/atoms/dog'
import { useEffect } from 'react'
import { userAtom } from '@src/stores/atoms/user'

const Container = styled.div`
  padding-bottom: 80px;
`

const DogDetailContainer = () => {
  const user = useAtomValue(userAtom)
  const { dogNo } = useParams<{ dogNo: string }>()
  const [dogDetail, setDogDetail] = useAtom(dogDetailAtom)
  const setUserLike = useSetAtom(dogLikedAtom)

  const { data, isLoading, refetch } = useQuery<DogType | null>({
    queryKey: ['dogDetail', user.userNo, dogNo],
    queryFn: () => fetchDogDetails(Number(dogNo), user.userNo),
  })

  useEffect(() => {
    if (!isLoading && data) {
      setDogDetail(data)
      setUserLike(data.userLiked)
    }
  }, [data, isLoading, dogDetail, setDogDetail, setUserLike])

  useEffect(() => {
    refetch().then(r => r)
  }, [refetch])

  const isDifferentShelter =
    user.role === 'SHELTER' && user.name === dogDetail.userName

  return (
    <Container>
      {!isLoading && data && (
        <>
          <DogFileSection
            files={data.files}
            name={data.name}
            sex={data.sex}
            neutralized={data.neutralized}
            kind={data.kind}
            hit={data.hit}
            age={data.age}
          />
          <ShelterName
            userName={data.userName}
            address={data.address}
            dogNo={data.dogNo}
          />
          <DogAdditionalInfo note={data.note} />
          <ShelterInfoSection
            address={data.address}
            createdAt={data.createdAt}
            userName={data.userName}
          />
          <TipSection />
          <SameShelterDogs dogDetail={dogDetail} />
          {!isDifferentShelter && <ChatStartButton />}
        </>
      )}
    </Container>
  )
}

export default DogDetailContainer
