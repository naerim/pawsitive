import * as c from '@src/components/style/LoginFormStyle'
import React, { useState } from 'react'
import {
  LoginUserResponseType,
  LoginUserType,
  UserType,
} from '@src/types/userType'
import { loginData, loginUser } from '@src/apis/user'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'

const LoginForm = () => {
  const [LoginError, setLoginError] = useState('')
  const [loginFormValue, setLoginForm] = useState<LoginUserType>({
    id: '',
    password: '',
  })
  const setUser = useSetAtom(userAtom)

  const navigate = useNavigate()

  const SaveLoginUser = (data: UserType) => {
    setUser(user => ({
      ...user,
      userNo: data.userNo,
      email: data.email,
      name: data.name,
      password: data.password,
      address: data.address,
      birth: data.birth,
      gender: data.gender,
      type: data.type,
      stage: data.stage,
    }))
  }

  const loginTokenMutation = useMutation({
    mutationKey: ['loginUser'],
    mutationFn: loginUser,
    onSuccess() {},
    onError() {
      console.log('토큰갱신 api 에러')
    },
  })

  const loginDataMutation = useMutation({
    mutationKey: ['loginData'],
    mutationFn: loginData,
    onSuccess(reqData: LoginUserResponseType) {
      console.log('mutate 사용을 성공했습니다')
      SaveLoginUser(reqData)
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
    loginDataMutation.mutate(loginFormValue)
    loginTokenMutation.mutate(loginFormValue)
  }

  return (
    <c.Container>
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

export default LoginForm
