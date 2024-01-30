import CustomCard from '@src/common/CustomCard'
import MainColorMoveCard from '@src/common/MainColorMoveCard'

const Index = () => {
  return (
    <div>
      <MainColorMoveCard
        title="포지티버가 되어 볼까요?"
        subTitle="입양 질문에 답하고 강아지들을 만나봐요"
        url="/confirm/pawsitive"
      />
      {/* <HomeRecommendDog /> */}
      <CustomCard>
        <div style={{ height: 200 }}>추천 컴포넌트</div>
      </CustomCard>
    </div>
  )
}

export default Index
