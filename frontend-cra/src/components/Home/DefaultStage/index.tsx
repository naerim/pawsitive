import MainColorMoveCard from '@common/MainColorMoveCard'
import ShowDogCard from '@components/Home/DefaultStage/ShowDogCard'
import HomeStatistics from '@components/Home/HomeStatistics'

const Index = () => {
  return (
    <div>
      <MainColorMoveCard
        title="포지티버가 되어 볼까요?"
        subTitle="체크리스트 확인 후 강아지들을 만나봐요"
        url="/confirm/pawsitive"
      />
      <HomeStatistics />
      <ShowDogCard />
    </div>
  )
}

export default Index
