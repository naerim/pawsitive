import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom, signUpErrorAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const BirthGenderInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)
  const [error, setError] = useAtom(signUpErrorAtom)
  const [inputValue, setInputValue] = useState('')

  const convertToYYYYMMDD = (yyMMdd, genderInput) => {
    const year = yyMMdd.slice(0, 2)
    const month = yyMMdd.slice(2, 4)
    const day = yyMMdd.slice(4, 6)

    let century

    if (genderInput === '1' || genderInput === '2') {
      century = '19'
    } else if (genderInput === '3' || genderInput === '4') {
      century = '20'
    }

    return `${century}${year}-${month}-${day}`
  }
  const handleInputChange = e => {
    const { value } = e.target

    if (!/^[0-9-]+$/.test(value)) {
      setError(prevError => ({
        ...prevError,
        dob: '올바른 형식으로 입력하세요.',
      }))
    } else if (value.length === 7) {
      const yy = value.slice(0, 2)
      const mm = value.slice(2, 4)
      const dd = value.slice(4, 6)
      const genderInput = value.slice(6)

      if (value[6] !== '-' || !/[1-4]/.test(genderInput)) {
        setError(prevError => ({
          ...prevError,
          dob: '올바른 형식으로 입력하세요.',
        }))
      } else {
        const fullDate = convertToYYYYMMDD(value.replace('-', ''), genderInput)
        const currentYear = new Date().getFullYear().toString().slice(2)
        const currentDate = new Date()

        if (
          (yy > currentYear && [3, 4].includes(parseInt(genderInput, 10))) ||
          ![1, 2, 3, 4].includes(parseInt(genderInput, 10)) ||
          new Date(fullDate) > currentDate ||
          mm < 1 ||
          mm > 12 ||
          dd < 1 ||
          dd > 31
        ) {
          setError(prevError => ({
            ...prevError,
            dob: '올바른 형식으로 입력하세요.',
          }))
        } else {
          setSignUpData(prevData => ({
            ...prevData,
            birth: fullDate,
            gender: genderInput === '1' || genderInput === '3' ? 'M' : 'F',
          }))
          setInputValue(value)
          setError(prevError => ({ ...prevError, dob: '' }))
        }
      }
    } else {
      setInputValue(value)
      setError(prevError => ({ ...prevError, dob: '' }))
    }
  }

  console.log(signUpData.birth, signUpData.gender)

  return (
    <s.InputContainer>
      <s.InputLabel htmlFor="jumin">
        주민등록번호 앞 6자리와 성별코드 1자리를 붙여주세요.
      </s.InputLabel>
      <s.InputField
        type="text"
        id="jumin"
        name="jumin"
        defaultValue={inputValue}
        onChange={handleInputChange}
        maxLength={8}
        placeholder="YYMMDD-S"
      />
      <s.ErrorText>{error.dob}</s.ErrorText>
    </s.InputContainer>
  )
}

export default BirthGenderInput
