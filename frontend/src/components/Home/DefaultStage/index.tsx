import MainColorMoveCard from '@src/common/MainColorMoveCard'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import ShowDogCard from '@src/components/Home/DefaultStage/ShowDogCard.tsx'

const Index = () => {
  return (
    <div>
      <MainColorMoveCard
        title="포지티버가 되어 볼까요?"
        subTitle="입양 질문에 답하고 강아지들을 만나봐요"
        url="/confirm/pawsitive"
      />
      <HomeStatistics />
      <ShowDogCard />
    </div>
  )
}

export default Index
