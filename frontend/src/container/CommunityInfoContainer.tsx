import { useNavigate } from 'react-router-dom'
import CommunityListContainer from '@src/container/CommunityListContainer'
import * as c from '@src/container/style/CommunityListInfoContainerStyle'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'

const CommunityInfoContainer = () => {
  const user = useAtomValue(userAtom)
  const navigate = useNavigate()

  const isMapChange = () => {
    navigate('/community/map')
  }

  const goCreateCommunity = () => navigate('/community/create')

  return (
    <c.Container>
      <c.Header>
        <c.HeaderButton type="button" onClick={isMapChange}>
          지도보기
        </c.HeaderButton>
        {user.stage > 3 && (
          <c.CreateButton type="button" onClick={goCreateCommunity}>
            작성하기
          </c.CreateButton>
        )}
      </c.Header>

      <div>
        <CommunityListContainer />
      </div>
    </c.Container>
  )
}

export default CommunityInfoContainer
