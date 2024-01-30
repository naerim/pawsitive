import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import DefaultStage from '@src/components/Home/DefaultStage'
import AdoptInfo from '@src/components/Home/AfterAdoption/AdoptInfo'
import FirstStage from '@src/components/Home/FirstStage'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import HomeDictionaryCard from '@src/components/Home/HomeDictionaryCard'

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
    case 4:
      currentStageComponent = <AdoptInfo />
      break
    default:
      currentStageComponent = <div />
  }

  return (
    <div>
      {currentStageComponent}
      <HomeDictionaryCard />
      <HomeStatistics />
    </div>
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
