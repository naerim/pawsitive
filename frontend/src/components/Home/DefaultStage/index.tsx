import CheckPawsitiveCard from '@src/components/Home/DefaultStage/CheckPawsitiveCard'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import CustomCard from '@src/common/CustomCard'
import HomeDictionaryCard from '@src/components/Home/HomeDictionaryCard'

const Index = () => {
  return (
    <div>
      <CheckPawsitiveCard />
      {/* <HomeRecommendDog /> */}
      <CustomCard>
        <div style={{ height: 200 }}>추천 컴포넌트</div>
      </CustomCard>
      <HomeDictionaryCard />
      <HomeStatistics />
    </div>
  )
}

export default Index
