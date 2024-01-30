import MainColorMoveCard from '@src/common/MainColorMoveCard'
import LightColorMoveCard from '@src/common/LightColorMoveCard'
import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import HomeStatistics from '@src/components/Home/HomeStatistics.tsx'

const Index = () => {
  return (
    <div>
      <HomeProgressBar currentStage={2} />
      <HomeStatistics />
      <MainColorMoveCard
        title="유기견 입양한 후기 보러가요!"
        subTitle="포지티버의 후기 확인하기"
        url="/community "
      />
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <LightColorMoveCard
          title="더 많은 펫과사전 찾아보기"
          url="/dictionary"
        />
      </div>
    </div>
  )
}

export default Index
