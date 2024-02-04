import * as c from '@src/components/style/SelfLoginFormStyle'
import React, { useState } from 'react'
import { LoginUserType } from '@src/types/userType'
import { loginUser } from '@src/apis/user'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

const SelfLoginForm = () => {
  const [LoginError, setLoginError] = useState('')
  const [loginFormValue, setLoginForm] = useState<LoginUserType>({
    id: '',
    password: '',
  })
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationKey: [loginUser],
    mutationFn: loginUser,
    onSuccess() {
      console.log('mutate 사용을 성공했습니다')
      navigate('/')
    },
    onError() {
      console.log('아이디, 비밀번호를 확인해주세요.')
      setLoginError(
        '이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.',
      )
    },
  })

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newId = e.target.value

    setLoginForm(prevLoginForm => ({
      ...prevLoginForm,
      id: newId,
    }))
  }

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPw = e.target.value

    setLoginForm(prevLoginForm => ({
      ...prevLoginForm,
      password: newPw,
    }))
  }

  // 유효성 검증 및 로그인 폼 제출
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(loginFormValue)
  }

  return (
    <c.Container>
      <c.Header>
        <c.ReturnButton>&lt;</c.ReturnButton>
        <c.H1>로그인</c.H1>
      </c.Header>

      <c.Form onSubmit={handleSubmit}>
        <c.InputForm>
          <c.Input
            id="ID"
            type="text"
            placeholder="아이디"
            onChange={handleIdChange}
          />
          <c.Input
            id="PW"
            type="password"
            placeholder="비밀번호"
            onChange={handlePwChange}
          />
          {LoginError && <p className="error">{LoginError}</p>}
        </c.InputForm>
        <c.Button type="submit">로그인</c.Button>
      </c.Form>
      <c.NoMemoryLink to="/signUp">
        <c.P>비밀번호가 생각나지 않으시나요?</c.P>
      </c.NoMemoryLink>
      <c.GoToSignUp to="/signUp">
        <p>PAWSITIVE가 처음이신가요?</p>
        <p style={{ color: '#fd9132' }}>&nbsp;가입하기</p>
      </c.GoToSignUp>
    </c.Container>
  )
}

export default SelfLoginForm
