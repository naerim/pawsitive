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
import { useAtom } from 'jotai'
import { dogDetailAtom } from '@src/stores/atoms/dog'
import { useEffect } from 'react'

const Container = styled.div`
  padding-bottom: 80px;
`

const DogDetailContainer = () => {
  // const location = useLocation()
  // const dogNo = location.state?.dogNo
  const { dogNo } = useParams<{ dogNo: string }>()
  const [dogDetail, setDogDetail] = useAtom(dogDetailAtom)
  const { userNo, name, role } = JSON.parse(
    window.localStorage.getItem('currentUser'),
  )

  const { data, isLoading } = useQuery<DogType | null>({
    queryKey: ['dogDetail'],
    queryFn: () => fetchDogDetails(Number(dogNo), userNo),
  })

  useEffect(() => {
    if (!isLoading && data) {
      setDogDetail(data)
    }
  }, [data, isLoading, setDogDetail])

  const isDifferentShelter = role === 'SHELTER' && name === dogDetail.userName

  return (
    <Container>
      {!isLoading && (
        <>
          <DogFileSection />
          <ShelterName />
          <DogAdditionalInfo />
          <ShelterInfoSection />
          <TipSection />
          <SameShelterDogs dogDetail={dogDetail} />
          {!isDifferentShelter && <ChatStartButton />}
        </>
      )}
    </Container>
  )
}

export default DogDetailContainer
