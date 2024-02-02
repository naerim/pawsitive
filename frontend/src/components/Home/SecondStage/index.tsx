import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import HomeDictionary from '@src/components/Home/SecondStage/HomeDictionary'
import HomeCommunityCard from '@src/components/Home/SecondStage/HomeCommunityCard'
import RecommendChatCard from '@src/components/Home/SecondStage/RecommendChatCard'

const Index = () => {
  return (
    <div>
      <RecommendChatCard />
      <HomeProgressBar currentStage={2} />
      <HomeDictionary />
      <HomeStatistics />
      <HomeCommunityCard />
    </div>
  )
}

export default Index
