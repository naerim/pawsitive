import KakaoMap from '@src/components/Community/KakaoMap'
import { useNavigate } from 'react-router-dom'
import * as c from '@src/container/style/CommunityListInfoContainerStyle'
import { useAtomValue } from 'jotai'
import { CommunityListAtom } from '@src/stores/atoms/community'

const CommunityMapContainer = () => {
  const navigate = useNavigate()
  const communityListValue = useAtomValue(CommunityListAtom)

  const isMapChange = () => {
    navigate('/community')
  }

  const goCreateCommunity = () => navigate('/community/create')

  return (
    <c.Container>
      <c.Header>
        <c.HeaderButton type="button" onClick={isMapChange}>
          목록보기
        </c.HeaderButton>
        <c.CreateButton type="button" onClick={goCreateCommunity}>
          작성하기
        </c.CreateButton>
      </c.Header>

      <div>
        <KakaoMap dummyData={communityListValue} />
      </div>
    </c.Container>
  )
}

export default CommunityMapContainer
