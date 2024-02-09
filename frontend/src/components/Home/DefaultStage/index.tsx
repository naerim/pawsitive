import MainColorMoveCard from '@src/common/MainColorMoveCard'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import ShowDogCard from '@src/components/Home/DefaultStage/ShowDogCard'

const Index = () => {
  const userRole = JSON.parse(window.localStorage.getItem('currentUser')).role

  return (
    <div>
      {userRole === 'USER' && (
        <MainColorMoveCard
          title="포지티버가 되어 볼까요?"
          subTitle="체크리스트 확인 후 강아지들을 만나봐요"
          url="/confirm/pawsitive"
        />
      )}
      <HomeStatistics />
      <ShowDogCard />
    </div>
  )
}

export default Index
