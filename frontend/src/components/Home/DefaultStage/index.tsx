import MainColorMoveCard from '@src/common/MainColorMoveCard'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import ShowDogCard from '@src/components/Home/DefaultStage/ShowDogCard'
import HomePopularCommunity from '@src/components/Home/HomePopularCommunity'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import DefaultStageHeader from '@src/components/Home/DefaultStage/DefaultStageHeader'
import * as c from '@src/components/Home/_style/CommonStageStyle'

const Index = () => {
  const user = useAtomValue(userAtom)

  return (
    <div>
      <DefaultStageHeader />
      <c.Wrap>
        <MainColorMoveCard
          title="포지티버가 되어 볼까요?"
          subTitle="체크리스트 확인 후 강아지들을 만나봐요"
          url="/confirm/pawsitive"
        />
        <MainColorMoveCard
          backgroundColor="#FECC3F"
          title="입양 단계 안내"
          subTitle="각각의 절차에 대해 알아봐요."
          url="/adopt-process-info"
        />
        <HomeStatistics />
        <ShowDogCard />
        <HomePopularCommunity />
      </c.Wrap>
    </div>
  )
}

export default Index
