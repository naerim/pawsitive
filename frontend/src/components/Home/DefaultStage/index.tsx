import MainColorMoveCard from '@src/common/MainColorMoveCard'
import HomeStatistics from '@src/components/Home/HomeStatistics'
import ShowDogCard from '@src/components/Home/DefaultStage/ShowDogCard'
import HomePopularCommunity from '@src/components/Home/HomePopularCommunity'
import { useAtomValue } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import DefaultStageHeader from '@src/components/Home/DefaultStage/DefaultStageHeader'
import * as d from '@src/components/Home/_style/DefaultStageStyle'

const Index = () => {
  // const [userRole, setUserRole] = useState('')
  const user = useAtomValue(userAtom)

  // 로그인 안한 상태로, 로컬스토리지 비어있으면 에러떠서 임시로 수정해두었습니다.
  // useEffect(() => {
  //   if (window.localStorage.getItem('currentUser')) {
  //     setUserRole(JSON.parse(window.localStorage.getItem('currentUser')).role)
  //   }
  // }, [])
  return (
    <div>
      <DefaultStageHeader />
      <d.Wrap>
        {user.userNo !== 0 && user.role === 'USER' && (
          <>
            <MainColorMoveCard
              backgroundColor="#ff9232"
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
          </>
        )}
        <HomeStatistics />
        <ShowDogCard />
        <HomePopularCommunity />
      </d.Wrap>
    </div>
  )
}

export default Index
