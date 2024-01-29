import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { Link } from 'react-router-dom'
import AdoptInfo from '@src/components/Home/AfterAdoption/AdoptInfo'
import DefaultStage from '@src/components/Home/DefaultStage'

const HomeContainer = () => {
  const user = useAtomValue(userAtom)
  if (user.stage === 0) {
    return <DefaultStage />
  }

  if (user.stage === 4) {
    return (
      <div>
        <AdoptInfo />
      </div>
    )
  }
  return (
    <div>
      {user.stage > 1 && <HomeProgressBar currentStage={user.stage} />}
      <Link to="/dogDetail">강아지 세부사항</Link>
      <br />
      <Link to="/new/dog">유기견 추가</Link>
    </div>
  )
}

export default HomeContainer
