import KakaoMap from '@src/components/Community/KakaoMap'
import { Link } from 'react-router-dom'
import CommunityListContainer from '@src/container/CommunityListContainer'
import * as c from '@src/components/style/CategoryButtonStyle'
import { useAtomValue } from 'jotai'
import { CommunityListAtom } from '@src/stores/atoms/community'
import { useState } from 'react'

const CommunityInfoContainer = () => {
  const [isMapValue, setIsMap] = useState(true)
  const communityListValue = useAtomValue(CommunityListAtom)

  const isMapChange = () => {
    setIsMap(!isMapValue)
  }

  return (
    <div>
      <c.Button type="button" onClick={isMapChange}>
        바꾸는 버튼
      </c.Button>
      <Link to="/community/create">
        <c.Button>커뮤니티 글 작성하기</c.Button>
      </Link>
      {isMapValue ? (
        <div>
          <KakaoMap dummyData={communityListValue} />
        </div>
      ) : (
        <div>
          <CommunityListContainer />
        </div>
      )}
    </div>
  )
}

export default CommunityInfoContainer
