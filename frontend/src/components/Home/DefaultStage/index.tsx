import CheckPawsitiveCard from '@src/components/Home/DefaultStage/CheckPawsitiveCard'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import CustomCard from '@src/common/CustomCard.tsx'
import TodayDictionary from '@src/components/Home/TodayDictionary'

const Index = () => {
  return (
    <div>
      <CheckPawsitiveCard />
      {/* <HomeRecommendDog /> */}
      <CustomCard>
        <div style={{ height: 200 }}>추천 컴포넌트</div>
      </CustomCard>
      <TodayDictionary />
      <HomeStatistics />
    </div>
  )
}

export default Index
