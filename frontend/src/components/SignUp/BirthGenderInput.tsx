import React from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom, signUpErrorAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const BirthGenderInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)
  const [error, setError] = useAtom(signUpErrorAtom)

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let dobInput = e.target.value

    dobInput = dobInput.replace(/[^\d-]/g, '')
    dobInput = dobInput.slice(0, 10)

    if (dobInput.length > 4 && dobInput[4] !== '-') {
      dobInput = `${dobInput.substring(0, 4)}-${dobInput.substring(4)}`
    }
    if (dobInput.length > 7 && dobInput[7] !== '-') {
      dobInput = `${dobInput.substring(0, 7)}-${dobInput.substring(7)}`
    }
    setSignUpData(prevData => ({ ...prevData, birth: dobInput }))

    const isNumberDobInput = () => /^\d{4}\.\d{2}\.\d{2}$/.test(dobInput)

    if (!isNumberDobInput()) {
      setError(prevError => ({
        ...prevError,
        birth: '8자리 숫자로 입력해주세요.',
      }))
    } else {
      setError(prevError => ({
        ...prevError,
        birth: '',
      }))
    }

    const [year, month, day] = dobInput.split('-').map(Number)

    const isValidYear = year >= 1900 && year <= new Date().getFullYear()
    const isValidMonth = month >= 1 && month <= 12
    const isValidDay = day >= 1 && day <= 31

    const isValidDobInput = isValidYear && isValidMonth && isValidDay

    if (!isValidDobInput) {
      setError(prevError => ({
        ...prevError,
        birth: '올바른 날짜 형식이 아닙니다.',
      }))
    } else {
      setError(prevError => ({
        ...prevError,
        birth: '',
      }))
    }
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const genderInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, gender: genderInput }))
  }

  return (
    <s.InputContainer>
      <s.InputLabel htmlFor="name">생년월일을 입력해주세요.</s.InputLabel>
      <s.InputField
        type="text"
        id="dob"
        name="dob"
        value={signUpData.birth}
        onChange={handleDobChange}
        placeholder="YYYY-MM-DD"
        required
      />
      <s.ErrorText>{error.birth}</s.ErrorText>
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

export default BirthGenderInput
