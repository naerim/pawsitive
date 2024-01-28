import * as n from '@src/common/style/NavbarStyle'

const Navbar = () => {
  return (
    <n.Container>
      <n.MenuWrap>
        <n.MenuItem to="/">홈</n.MenuItem>
        <n.MenuItem to="/chatting">채팅</n.MenuItem>
        <n.MenuItem to="/dog">유기견공고</n.MenuItem>
        <n.MenuItem to="/community">커뮤니티</n.MenuItem>
        <n.MenuItem to="/mypage">마이페이지</n.MenuItem>
      </n.MenuWrap>
    </n.Container>
  )
}

export default Navbar
