import LoginHeader from '@src/components/Login/LoginHeader'
import LoginForm from '@src/components/Login/LoginForm'
import * as l from '@src/container/style/LoginContainerStyle'

const LoginContainer = () => {
  return (
    <l.Container>
      <LoginHeader />
      <LoginForm />
    </l.Container>
  )
}
export default LoginContainer
