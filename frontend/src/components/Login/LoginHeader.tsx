import * as c from '@src/components/style/LoginHeaderStyle'
import { useNavigate } from 'react-router-dom'

const LoginHeader = () => {
  const navigate = useNavigate()
  const onReturn = () => navigate(-1)

  return (
    <c.Header>
      <c.ReturnButton type="button" onClick={onReturn}>
        <img src="/icon/icon_gray_arrow_left.png" alt="" />
      </c.ReturnButton>
      <c.Title>로그인</c.Title>
      <div />
    </c.Header>
  )
}

export default LoginHeader
