import KakaoMap from '@src/components/Community/KakaoMap'
import { Link } from 'react-router-dom'

const CommunityContainer = () => {
  return (
    <div>
      <KakaoMap />
      <Link to="/article/create">커뮤니티 글 작성하기</Link>
    </div>
  )
}

export default CommunityContainer
