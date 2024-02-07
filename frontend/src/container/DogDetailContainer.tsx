import styled from 'styled-components'
import DogFileSection from '@src/components/DogDetail/DogFileSection'
import ShelterName from '@src/components/DogDetail/ShelterName'
import DogAdditionalInfo from '@src/components/DogDetail/DogAdditionalInfo'
import ChatStartButton from '@src/components/DogDetail/ChatStartButton'
import TipSection from '@src/components/DogDetail/TipSection'
import ShelterInfoSection from '@src/components/DogDetail/ShelterInfoSection'
import SameShelterDogs from '@src/components/DogDetail/SameShelterDogs'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { DogType } from '@src/types/dogType'
import { fetchDogDetails } from '@src/apis/dog'
import { useAtom } from 'jotai'
import { dogDetailAtom } from '@src/stores/atoms/dog'

const Container = styled.div`
  padding-bottom: 80px;
`

const DogDetailContainer = () => {
  const location = useLocation()
  const dogNo = location.state?.dogNo
  const [dogDetail, setDogDetail] = useAtom(dogDetailAtom)

  const { data, isLoading } = useQuery<DogType | null>({
    queryKey: ['dogDetail'],
    queryFn: () => fetchDogDetails(Number(dogNo)),
  })

  if (!isLoading && data) {
    setDogDetail(data)
  }

  return (
    <Container>
      {!isLoading && (
        <>
          <DogFileSection />
          <ShelterName />
          <DogAdditionalInfo />
          <ShelterInfoSection />
          <TipSection />
          <SameShelterDogs />
          <ChatStartButton dogNo={dogDetail.dogNo} />
        </>
      )}
    </Container>
  )
}

export default DogDetailContainer
