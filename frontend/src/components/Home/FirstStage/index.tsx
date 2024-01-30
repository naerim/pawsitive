import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import MainColorMoveCard from '@src/common/MainColorMoveCard'

const Index = () => {
  return (
    <div>
      <HomeProgressBar currentStage={1} />
      <HomeStatistics />
      <MainColorMoveCard
        title="아직 설문이 완료되지 않았어요!"
        subTitle="입양 질문에 답하러 가기"
        url="/mypage/survey"
      />
    </div>
  )
}

export default Index
