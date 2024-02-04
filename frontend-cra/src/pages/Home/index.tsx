import HomeLayout from '@components/Home/HomeLayout'
import HomePopularCommunity from '@components/Home/HomePopularCommunity'
import { useAtomValue } from 'jotai'
import DefaultStage from '@components/Home/DefaultStage'
import { userAtom } from '@stores/user'
import FirstStage from '@components/Home/FirstStage'
import SecondStage from '@components/Home/SecondStage'
import ThirdStage from '@components/Home/ThirdStage'
import FourthStage from '@components/Home/FourthStage'
import Navbar from '@common/Navbar'

const Index = () => {
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
    <>
      <HomeLayout>
        <div>{currentStageComponent}</div>
        <HomePopularCommunity />
      </HomeLayout>
      <Navbar />
    </>
  )
}

export default Index
