import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom, signUpErrorAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const PasswordCheckInput = () => {
  const [signUpData] = useAtom(signUpDataAtom)
  const [error, setError] = useAtom(signUpErrorAtom)
  const [pwCheck, setPwCheck] = useState('')

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const pwCheckInput = e.target.value
    setPwCheck(pwCheckInput)

    if (pwCheckInput !== signUpData.pw) {
      setError(prevError => ({
        ...prevError,
        pwCheck: '비밀번호가 일치하지 않습니다.',
      }))
    } else {
      setError(prevError => ({
        ...prevError,
        pwCheck: '',
      }))
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
      <s.ErrorText>{error.pwCheck}</s.ErrorText>
    </s.InputContainer>
  )
}

export default PasswordCheckInput
