import DogFileSection from '@src/components/DogDetail/DogFileSection'
import ShelterName from '@src/components/DogDetail/ShelterName'
import DogAdditionalInfo from '@src/components/DogDetail/DogAdditionalInfo'
import ChatStartButton from '@src/components/DogDetail/ChatStartButton'
import styled from 'styled-components'

const Container = styled.div`
  padding-bottom: 80px;
`

const DogDetailContainer = () => {
  return (
    <Container>
      <DogFileSection />
      <ShelterName />
      <DogAdditionalInfo />
      <ChatStartButton />
    </Container>
  )
}

export default DogDetailContainer
