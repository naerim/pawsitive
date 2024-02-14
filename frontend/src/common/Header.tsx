import * as h from '@src/common/style/HeaderStyle'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const locationNow = useLocation()
  const navigate = useNavigate()

  const homeClick = () => {
    navigate(`/`)
  }

  if (locationNow.pathname === '/confirm/pawsitive') return null
  if (locationNow.pathname === '/mypage/survey') return null
  return (
    <h.Container>
      <h.Wrap>
        <h.Logo onClick={homeClick}>PAWSITIVE</h.Logo>
        <div>
          <h.MenuItem to="/dictionary">펫과사전</h.MenuItem>
        </div>
      </h.Wrap>
    </h.Container>
  )
}

export default Header
