import AdoptInfo from '@components/Home/FourthStage/AdoptInfo'
import DailyQuestion from '@components/Home/FourthStage/DailyQuestion'
import DogDiary from '@components/Home/FourthStage/DogDiary'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import * as f from '../_style/FourthStageStyle'

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const AnimatedCard = styled.div`
  opacity: 0;
  transform: translateY(-20px);
  animation: ${fadeIn} 1.5s ease-in-out forwards;
`

const Index = () => {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowCard(true)
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      {showCard && (
        <AnimatedCard>
          <DailyQuestion />
        </AnimatedCard>
      )}
      <f.CenterContainer>
        <AdoptInfo />
        <DogDiary />
      </f.CenterContainer>
    </>
  )
}

export default Index
