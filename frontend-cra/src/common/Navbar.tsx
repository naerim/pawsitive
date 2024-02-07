import * as n from './_style/NavbarStyle'

const Navbar = () => {
  return (
    <n.Container>
      <n.MenuWrap>
        <n.MenuItem to="/">
          <n.Image src="/icon/icon_home.png" alt="" />
          <n.Label>홈</n.Label>
        </n.MenuItem>
        <n.MenuItem to="/chat">
          <n.Image src="/icon/icon_chat.png" alt="" />
          <n.Label>채팅</n.Label>
        </n.MenuItem>
        <n.MenuItem to="/dogs">
          <n.Image src="/icon/icon_pin.png" alt="" />
          <n.Label>공고</n.Label>
        </n.MenuItem>
        <n.MenuItem to="/community">
          <n.Image src="/icon/icon_footprint.png" alt="" />
          <n.Label>발자국</n.Label>
        </n.MenuItem>
        <n.MenuItem to="/mypage">
          <n.Image src="/icon/icon_mypage.png" alt="" />
          <n.Label>마이</n.Label>
        </n.MenuItem>
      </n.MenuWrap>
    </n.Container>
  )
}

export default Navbar
