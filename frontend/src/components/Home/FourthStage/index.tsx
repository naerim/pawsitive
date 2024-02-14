import AdoptedDogDetail from '@src/components/AdoptedDog/AdoptedDogDetail'
import DailyQuestion from '@src/components/Home/FourthStage/DailyQuestion'
import DogDiary from '@src/components/Home/FourthStage/DogDiary'
import * as t from '@src/components/style/FourthStageIndexStyle'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import HomeDictionary from '@src/components/Home/SecondStage/HomeDictionary'
import HomeRecommendDictionary from '@src/components/Home/HomeRecommendDictionary'
import HomePopularCommunity from '@src/components/Home/HomePopularCommunity'
import * as c from '@src/components/Home/_style/CommonStageStyle'

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
    <c.Container>
      {showCard && (
        <AnimatedCard>
          <DailyQuestion />
        </AnimatedCard>
      )}
      <t.CenterContainer>
        <AdoptedDogDetail />
        <DogDiary />
      </t.CenterContainer>
      <HomeRecommendDictionary />
      <HomePopularCommunity />
      <HomeDictionary />
    </c.Container>
  )
}

export default Index
