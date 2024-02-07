import * as m from './_style/NavigationStyle'

const Navigation = () => {
  return (
    <m.Container>
      <m.MenuItem to="/mypage/profile">회원정보수정</m.MenuItem>
      <m.MenuItem to="/mypage/setting">설정</m.MenuItem>
      <m.MenuItem to="/mypage/find-similar-dog">
        나와 닮은꼴 강아지 찾기
      </m.MenuItem>
      <m.MenuItem to="/mypage/survey">입양설문 하러가기</m.MenuItem>
      <m.MenuItem to="/login">로그인</m.MenuItem>
    </m.Container>
  )
}

export default Navigation
