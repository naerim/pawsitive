import * as h from '@src/common/style/HeaderStyle'

const Header = () => {
  return (
    <h.Container>
      <h.Logo>Pawsitive</h.Logo>
      <div>
        <h.MenuItem to="/dictionary">백과사전</h.MenuItem>
        <h.MenuItem to="/signUp">회원가입</h.MenuItem>
      </div>
    </h.Container>
  )
}

export default Header
