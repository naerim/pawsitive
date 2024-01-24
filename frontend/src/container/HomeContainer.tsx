import HomeTop from '@src/components/Home/HomeTop'
import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { Link } from 'react-router-dom'
import HomeRecommendDog from '@src/components/Home/HomeRecommendDog'

const HomeContainer = () => {
  const user = useAtomValue(userAtom)
  return (
    <div>
      {user.stage !== 0 && <HomeProgressBar currentStage={user.stage} />}
      {user.stage === 0 && <HomeRecommendDog />}
      <HomeTop />
      <h1>메인 페이지</h1>
      <Link to="/dogDetail">강아지 세부사항</Link>
    </div>
  )
}

export default HomeContainer
