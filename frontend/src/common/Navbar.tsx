import * as n from '@src/common/style/NavbarStyle'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const locationNow = useLocation()

  // if (locationNow.pathname.match(/^\/chat\/\d+$/)) return null
  if (locationNow.pathname === '/confirm/pawsitive') return null
  if (locationNow.pathname === '/mypage/survey') return null
  return (
    <n.Container>
      <n.MenuWrap>
        <n.MenuItem to="/">홈</n.MenuItem>
        <n.MenuItem to="/chat">채팅</n.MenuItem>
        <n.MenuItem to="/dogs">유기견공고</n.MenuItem>
        <n.MenuItem to="/community">커뮤니티</n.MenuItem>
        <n.MenuItem to="/mypage">마이페이지</n.MenuItem>
      </n.MenuWrap>
    </n.Container>
  )
}

export default Navbar
