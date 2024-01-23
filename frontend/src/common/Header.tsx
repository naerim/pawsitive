import * as h from '@src/common/style/HeaderStyle'

const Header = () => {
  return (
    <h.Container>
      <h.MenuItem to="/signUp">회원가입</h.MenuItem>
      <h.MenuItem to="/">홈</h.MenuItem>
      <h.MenuItem to="/chatting">채팅</h.MenuItem>
      <h.MenuItem to="/dog">유기견공고</h.MenuItem>
      <h.MenuItem to="/community">커뮤니티</h.MenuItem>
      <h.MenuItem to="/mypage">마이페이지</h.MenuItem>
    </h.Container>
  )
}

export default Header
