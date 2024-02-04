import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const PasswordCheckInput = () => {
  const [signUpData] = useAtom(signUpDataAtom)
  const [pwCheck, setPwCheck] = useState('')
  const [pwError, setPwError] = useState('')

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const pwCheckInput = e.target.value
    setPwCheck(pwCheckInput)

    if (pwCheckInput !== signUpData.pw) {
      setPwError('비밀번호가 일치하지 않습니다.')
    } else {
      setPwError('')
    }
  }

  return (
    <s.InputContainer>
      <s.InputLabel htmlFor="password">
        비밀번호를 다시 입력해주세요.
      </s.InputLabel>
      <s.InputField
        type="password"
        id="passwordCheck"
        name="passwordCheck"
        value={pwCheck}
        onChange={handlePasswordCheckChange}
        placeholder="비밀번호 확인"
      />
      <s.ErrorText>{pwError}</s.ErrorText>
    </s.InputContainer>
  )
}

export default PasswordCheckInput
