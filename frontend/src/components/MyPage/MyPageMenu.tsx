import { Link } from 'react-router-dom'

const MyPageMenu = () => {
  return (
    <div>
      <Link to="/mypage/profile">회원정보수정</Link>
      <Link to="/mypage/setting">설정</Link>
    </div>
  )
}

export default MyPageMenu
