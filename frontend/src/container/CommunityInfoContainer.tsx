import KakaoMap from '@src/components/Community/KakaoMap'
import { Link } from 'react-router-dom'
import CommunityListContainer from '@src/container/CommunityListContainer'
import * as c from '@src/components/style/CategoryButtonStyle'

// 더미 데이터에서 위치 정보를 가져와 마커를 표시
const dummyData = [
  {
    title: '마커1',
    latitude: 35.185781,
    longitude: 126.8257382,
  },
  {
    title: '마커2',
    latitude: 35.1345,
    longitude: 126.825243,
  },
  {
    title: '마커3',
    latitude: 35.1855,
    longitude: 126.82553,
  },
]

const CommunityInfoContainer = () => {
  return (
    <div>
      <KakaoMap dummyData={dummyData} />
      <Link to="/community/create">
        <c.Button>커뮤니티 글 작성하기</c.Button>
      </Link>
      <CommunityListContainer />
    </div>
  )
}

export default CommunityInfoContainer
