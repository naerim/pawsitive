import React from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom, signUpErrorAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const NameInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)
  const [error, setError] = useAtom(signUpErrorAtom)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, name: nameInput }))

    if (nameInput.length < 2 || nameInput.length > 20) {
      setError(prevError => ({ ...prevError, name: '실명을 입력해주세요.' }))
    } else setError(prevError => ({ ...prevError, name: '' }))
  }

  let title = '보호소 이름을 적어주세요.'
  if (signUpData.role === 'USER') {
    title = '이름을 적어주세요.'
  }

  return (
    <s.InputContainer>
      <s.InputLabel htmlFor="name">{title}</s.InputLabel>
      <s.InputField
        type="text"
        id="name"
        name="name"
        value={signUpData.name}
        onChange={handleNameChange}
        placeholder="이름"
      />
      <s.ErrorText>{error.name}</s.ErrorText>
    </s.InputContainer>
  )
}

export default NameInput
