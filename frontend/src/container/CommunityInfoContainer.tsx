import KakaoMap from '@src/components/Community/KakaoMap'
import { useNavigate } from 'react-router-dom'
import CommunityListContainer from '@src/container/CommunityListContainer'
import * as c from '@src/container/style/CommunityListInfoContainerStyle'
import { useAtomValue } from 'jotai'
import { CommunityListAtom } from '@src/stores/atoms/community'
import { useEffect, useState } from 'react'
import { CommunityItemType } from '@src/types/components/CommunityType'

const CommunityInfoContainer = () => {
  const navigate = useNavigate()

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

  const goCreateCommunity = () => navigate('/community/create')

  return (
    <c.Container>
      <c.Header>
        <c.HeaderButton type="button" onClick={isMapChange}>
          {isMapValue ? '목록 보기' : '지도 보기'}
        </c.HeaderButton>
        <c.CreateButton type="button" onClick={goCreateCommunity}>
          작성하기
        </c.CreateButton>
      </c.Header>

      {isMapValue ? (
        <div>
          <KakaoMap dummyData={communityContents} />
        </div>
      ) : (
        <div>
          <CommunityListContainer />
        </div>
      )}
    </c.Container>
  )
}

export default CommunityInfoContainer
