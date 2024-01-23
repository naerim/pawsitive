import * as f from '@src/common/style/FooterStyle'

const Footer = () => {
  return (
    <f.Container>
      <f.MenuWrap>
        <f.MenuItem to="/">홈</f.MenuItem>
        <f.MenuItem to="/chatting">채팅</f.MenuItem>
        <f.MenuItem to="/dog">유기견공고</f.MenuItem>
        <f.MenuItem to="/community">커뮤니티</f.MenuItem>
        <f.MenuItem to="/mypage">마이페이지</f.MenuItem>
      </f.MenuWrap>
    </f.Container>
  )
}

export default Footer
