import * as h from '@src/common/style/HeaderStyle'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const locationNow = useLocation()
  if (locationNow.pathname === '/confirm/pawsitive') return null

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
