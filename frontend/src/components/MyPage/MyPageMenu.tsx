import * as m from '@src/components/style/MyPageMenuStyle'

const MyPageMenu = () => {
  return (
    <m.Container>
      <m.MenuItem to="/mypage/profile">회원정보수정</m.MenuItem>
      <m.MenuItem to="/mypage/setting">설정</m.MenuItem>
    </m.Container>
  )
}

export default MyPageMenu
