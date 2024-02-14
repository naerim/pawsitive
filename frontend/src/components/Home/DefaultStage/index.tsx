import MainColorMoveCard from '@src/common/MainColorMoveCard'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import ShowDogCard from '@src/components/Home/DefaultStage/ShowDogCard'
import HomePopularCommunity from '@src/components/Home/HomePopularCommunity'
import DefaultStageHeader from '@src/components/Home/DefaultStage/DefaultStageHeader'
import * as d from '@src/components/Home/_style/DefaultStageStyle'

const Index = () => {
  return (
    <div>
      <DefaultStageHeader />
      <d.Wrap>
        <MainColorMoveCard
          title="포지티버가 되어 볼까요?"
          subTitle="체크리스트 확인 후 강아지들을 만나봐요"
          url="/confirm/pawsitive"
        />
        <HomeStatistics />
        <ShowDogCard />
        <HomePopularCommunity />
      </d.Wrap>
    </div>
  )
}

export default Index
