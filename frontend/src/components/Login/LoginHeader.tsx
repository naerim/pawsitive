import * as c from '@src/components/style/LoginHeaderStyle'
import { useNavigate } from 'react-router-dom'

const LoginHeader = () => {
  const navigate = useNavigate()
  const onReturn = () => navigate(-1)

  return (
    <c.Header>
      <c.ReturnButton type="button" onClick={onReturn}>
        &lt;
      </c.ReturnButton>
      <c.H1>로그인</c.H1>
    </c.Header>
  )
}

export default LoginHeader
