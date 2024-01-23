import HomeTop from '@src/components/Home/HomeTop'
import HomeProgressBar from '@src/components/Home/HomeProgressBar'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'

const HomeContainer = () => {
  const user = useAtomValue(userAtom)
  return (
    <div>
      {user.stage !== 0 && <HomeProgressBar currentStage={user.stage} />}
      <HomeTop />
      메인 페이지
    </div>
  )
}

export default HomeContainer
