import CheckPawsitiveCard from '@src/components/Home/DefaultStage/CheckPawsitiveCard'
import CustomCard from '@src/common/CustomCard'

const Index = () => {
  return (
    <div>
      <CheckPawsitiveCard />
      {/* <HomeRecommendDog /> */}
      <CustomCard>
        <div style={{ height: 200 }}>추천 컴포넌트</div>
      </CustomCard>
    </div>
  )
}

export default Index
