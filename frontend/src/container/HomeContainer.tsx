import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import DefaultStage from '@src/components/Home/DefaultStage'
import FirstStage from '@src/components/Home/FirstStage'
import HomeLayout from '@src/components/Home/HomeLayout'
import HomePopularCommunity from '@src/components/Home/HomePopularCommunity'
import SecondStage from '@src/components/Home/SecondStage'
import ThirdStageContainer from '@src/container/ThirdStageContainer'

const HomeContainer = () => {
  const user = useAtomValue(userAtom)

  let currentStageComponent

  switch (user.stage) {
    case 0:
      currentStageComponent = <DefaultStage />
      break
    case 1:
      currentStageComponent = <FirstStage />
      break
    case 2:
      currentStageComponent = <SecondStage />
      break
    case 4:
      currentStageComponent = <ThirdStageContainer />
      break
    default:
      currentStageComponent = <div />
  }

  return (
    <HomeLayout>
      {currentStageComponent}
      <HomePopularCommunity />
    </HomeLayout>
  )
  // return (
  //   <div>
  //     {user.stage > 1 && <HomeProgressBar currentStage={user.stage} />}
  //     <Link to="/dogDetail">강아지 세부사항</Link>
  //     <br />
  //     <Link to="/new/dog">유기견 추가</Link>
  //   </div>
  // )
}

export default HomeContainer
