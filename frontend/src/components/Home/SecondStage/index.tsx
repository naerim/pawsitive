import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import HomeDictionary from '@src/components/Home/SecondStage/HomeDictionary'
import HomeCommunityCard from '@src/components/Home/SecondStage/HomeCommunityCard'
import RecommendChatCard from '@src/components/Home/SecondStage/RecommendChatCard'
import HomePopularCommunity from '@src/components/Home/HomePopularCommunity'
import * as c from '@src/components/Home/_style/CommonStageStyle'

// 애니메이션 키프레임 정의
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
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <c.Container>
      {showCard && (
        <AnimatedCard>
          <RecommendChatCard />
        </AnimatedCard>
      )}
      <HomeProgressBar currentStage={2} />
      <HomeDictionary />
      <HomeStatistics />
      <HomeCommunityCard />
      <HomePopularCommunity />
    </c.Container>
  )
}

export default Index
