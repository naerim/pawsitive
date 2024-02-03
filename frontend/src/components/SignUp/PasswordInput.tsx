import React from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const PasswordInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, pw: passwordInput }))
  }

  return (
    <s.InputContainer>
      <s.InputLabel htmlFor="password">비밀번호를 적어주세요.</s.InputLabel>
      <s.InputField
        type="password"
        id="password"
        name="password"
        value={signUpData.pw}
        onChange={handlePasswordChange}
        placeholder="비밀번호"
      />
    </s.InputContainer>
  )
}

export default PasswordInput
