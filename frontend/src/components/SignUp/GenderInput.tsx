import React from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const GenderInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const genderInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, gender: genderInput }))
  }

  return (
    <s.InputContainer>
      <s.InputLabel>성별을 선택하세요.</s.InputLabel>
      <s.InputLabel>
        <input
          type="radio"
          name="gender"
          value="M"
          checked={signUpData.gender === 'M'}
          onChange={handleGenderChange}
        />
        남성
      </s.InputLabel>
      <s.InputLabel>
        <input
          type="radio"
          name="gender"
          value="F"
          checked={signUpData.gender === 'F'}
          onChange={handleGenderChange}
        />
        여성
      </s.InputLabel>
    </s.InputContainer>
  )
}

export default GenderInput
