import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import HomeDictionary from '@src/components/Home/SecondStage/HomeDictionary'
import HomeCommunityCard from '@src/components/Home/SecondStage/HomeCommunityCard.tsx'

const Index = () => {
  return (
    <div>
      <HomeProgressBar currentStage={2} />
      <HomeStatistics />
      <HomeDictionary />
      <HomeCommunityCard />
    </div>
  )
}

export default Index
