import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'
import HomeProgressBar from '@components/Home/HomeProgressBar'
import AlarmFillAdoptInfo from '@components/Home/ThirdStage/AlarmFillAdoptInfo'

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
    <div>
      {showCard && (
        <AnimatedCard>
          <AlarmFillAdoptInfo />
        </AnimatedCard>
      )}
      <HomeProgressBar currentStage={3} />
    </div>
  )
}

export default Index
