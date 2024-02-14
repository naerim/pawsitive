import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import MainColorMoveCard from '@src/common/MainColorMoveCard'
import HomeRecommendDog from '@src/components/Home/FirstStage/HomeRecommendDog'
import HomePopularCommunity from '@src/components/Home/HomePopularCommunity'
import FirstStageHeader from '@src/components/Home/FirstStage/FirstStageHeader'
import * as c from '@src/components/Home/_style/CommonStageStyle'

const Index = () => {
  return (
    <div>
      <FirstStageHeader />
      <c.Wrap>
        <HomeProgressBar currentStage={1} />
        <HomeStatistics />
        <MainColorMoveCard
          title="아직 설문이 완료되지 않았어요!"
          subTitle="입양 질문에 답하러 가기"
          url="/mypage/survey"
          backgroundColor="#FF9232"
        />
        <HomeRecommendDog />
        <HomePopularCommunity />
      </c.Wrap>
    </div>
  )
}

export default Index
