import styled from 'styled-components'
import DogFileSection from '@src/components/DogDetail/DogFileSection'
import ShelterName from '@src/components/DogDetail/ShelterName'
import DogAdditionalInfo from '@src/components/DogDetail/DogAdditionalInfo'
import ChatStartButton from '@src/components/DogDetail/ChatStartButton'
import TipSection from '@src/components/DogDetail/TipSection'
import ShelterInfoSection from '@src/components/DogDetail/ShelterInfoSection'
import SameShelterDogs from '@src/components/DogDetail/SameShelterDogs'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
  padding-bottom: 80px;
`

const DogDetailContainer = () => {
  const location = useLocation()
  const dogNo = location.state?.dogNo

  return (
    <Container>
      <DogFileSection />
      <ShelterName />
      <DogAdditionalInfo />
      <ShelterInfoSection />
      <TipSection />
      <SameShelterDogs />
      <ChatStartButton dogNo={dogNo} />
    </Container>
  )
}

export default DogDetailContainer
