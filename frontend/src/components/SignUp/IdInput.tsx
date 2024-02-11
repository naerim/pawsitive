import React from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const NameInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, email: emailInput }))
  }

  return (
    <s.Container>
      <s.TitleContainer>
        <s.Title>아이디를 입력하세요</s.Title>
      </s.TitleContainer>
      <s.InputContainer>
        <s.Input
          type="text"
          id="email"
          name="email"
          value={signUpData.email}
          onChange={handleEmailChange}
          placeholder="ID"
        />
      </s.InputContainer>
    </s.Container>
  )
}

export default NameInput
