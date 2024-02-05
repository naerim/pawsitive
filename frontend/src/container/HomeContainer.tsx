import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import DefaultStage from '@src/components/Home/DefaultStage'
import FirstStage from '@src/components/Home/FirstStage'
import HomeLayout from '@src/components/Home/HomeLayout'
import HomePopularCommunity from '@src/components/Home/HomePopularCommunity'
import SecondStage from '@src/components/Home/SecondStage'
import ThirdStage from '@src/components/Home/ThirdStage'
import FourthStage from 'src/components/Home/FourthStage'

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
    case 3:
      currentStageComponent = <ThirdStage />
      break
    case 4:
      currentStageComponent = <FourthStage />
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
}

export default HomeContainer
