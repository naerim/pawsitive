import KakaoMap from '@src/components/Community/KakaoMap'
import { Link } from 'react-router-dom'
import CommunityListContainer from '@src/container/CommunityListContainer'
import * as c from '@src/components/style/CategoryButtonStyle'
import { useAtomValue } from 'jotai'
import { CommunityListAtom } from '@src/stores/atoms/community'
import { useEffect, useState } from 'react'
import { CommunityItemType } from '@src/types/components/CommunityType'

const CommunityInfoContainer = () => {
  const [isMapValue, setIsMap] = useState(false)
  const communityListValue = useAtomValue(CommunityListAtom)
  const [communityContents, setCommunityContents] = useState<
    CommunityItemType[]
  >([])

  const isMapChange = () => {
    setIsMap(!isMapValue)
  }

  useEffect(() => {
    // communityListValue가 비어있지 않은 경우에만 로직을 수행
    if (communityListValue && CommunityListAtom) {
      setCommunityContents(communityListValue)
    }
  }, [communityListValue, CommunityListAtom])

  return (
    <div>
      <c.Button type="button" onClick={isMapChange}>
        {isMapValue ? '목록 보기' : '지도 보기'}
      </c.Button>
      <Link to="/community/create">
        <c.Button>커뮤니티 글 작성하기</c.Button>
      </Link>
      {isMapValue ? (
        <div>
          <KakaoMap dummyData={communityContents} />
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
