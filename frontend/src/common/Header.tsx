import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      헤더 영역
      <Link to="/signUp">회원가입</Link>
    </header>
  )
}

export default Header
