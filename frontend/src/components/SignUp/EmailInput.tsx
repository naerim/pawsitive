import React from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const EmailInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, email: emailInput }))
  }

  return (
    <s.InputContainer>
      <s.InputLabel htmlFor="email">이메일을 적어주세요.</s.InputLabel>
      <s.InputField
        type="text"
        id="email"
        name="email"
        value={signUpData.email}
        onChange={handleEmailChange}
        placeholder="이메일"
      />
    </s.InputContainer>
  )
}

export default EmailInput
