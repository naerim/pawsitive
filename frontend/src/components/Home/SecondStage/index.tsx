import MainColorMoveCard from '@src/common/MainColorMoveCard'
import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import HomeDictionary from '@src/components/Home/SecondStage/HomeDictionary'

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
      <HomeDictionary />
    </div>
  )
}

export default Index
