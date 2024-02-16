import React from 'react'
import { useAtom } from 'jotai'
import {
  signUpDataAtom,
  signUpErrorAtom,
  signUpPwCheckAtom,
} from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const PasswordInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)
  const [error, setError] = useAtom(signUpErrorAtom)
  const [pwCheck, setPwCheck] = useAtom(signUpPwCheckAtom)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, pw: passwordInput }))
  }

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const pwCheckInput = e.target.value
    setPwCheck(pwCheckInput)

    if (pwCheckInput !== signUpData.pw) {
      setError(prevError => ({
        ...prevError,
        pwCheck: '비밀번호가 일치하지 않습니다',
      }))
    } else {
      setError(prevError => ({
        ...prevError,
        pwCheck: '',
      }))
    }
  }

  return (
    <s.Container>
      <s.TitleContainer>
        <s.Title>비밀번호를 적어주세요</s.Title>
      </s.TitleContainer>
      <s.TwoInputContainer>
        <s.InputContainer>
          <s.Input
            type="password"
            id="password"
            name="password"
            value={signUpData.pw}
            onChange={handlePasswordChange}
            placeholder="비밀번호"
          />
        </s.InputContainer>
        <s.InputContainer>
          <s.Input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            value={pwCheck}
            onChange={handlePasswordCheckChange}
            placeholder="비밀번호 확인"
          />
        </s.InputContainer>
        <s.ErrorText>{error.pwCheck}</s.ErrorText>
      </s.TwoInputContainer>
    </s.Container>
  )
}

export default PasswordInput
