import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom, signUpErrorAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const BirthGenderInput = () => {
  const [, setSignUpData] = useAtom(signUpDataAtom)
  const [error, setError] = useAtom(signUpErrorAtom)
  const [inputValue, setInputValue] = useState('')

  const determineCentury = (genderInput: string) => {
    return genderInput === '1' || genderInput === '2' ? '19' : '20'
  }
  const convertToYYYYMMDD = (yyMMdd: string, genderInput: string) => {
    const year = determineCentury(genderInput) + yyMMdd.slice(0, 2)
    const month = yyMMdd.slice(2, 4)
    const day = yyMMdd.slice(4, 6)

    return `${year}-${month}-${day}`
  }

  const validateInput = (
    yy: string,
    mm: string,
    dd: string,
    genderInput: string,
  ): boolean => {
    const currentYear = new Date().getFullYear().toString().slice(2)
    const currentDate = new Date()

    return (
      ![1, 2, 3, 4].includes(parseInt(genderInput, 10)) ||
      new Date(convertToYYYYMMDD(`${yy}${mm}${dd}`, genderInput)) >
        currentDate ||
      parseInt(mm, 10) < 1 ||
      parseInt(mm, 10) > 12 ||
      parseInt(dd, 10) < 1 ||
      parseInt(dd, 10) > 31 ||
      (parseInt(yy, 10) > parseInt(currentYear, 10) &&
        [3, 4].includes(parseInt(genderInput, 10)))
    )
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (/^[0-9-]+$/.test(value) && value.length === 8 && value[6] === '-') {
      const [yy, mm, dd, genderInput] = [
        value.slice(0, 2),
        value.slice(2, 4),
        value.slice(4, 6),
        value.slice(7),
      ]
      if (
        /[1-4]/.test(genderInput) &&
        !validateInput(yy, mm, dd, genderInput)
      ) {
        const fullDate = convertToYYYYMMDD(value.replace('-', ''), genderInput)

        setSignUpData(prevData => ({
          ...prevData,
          birth: fullDate,
          gender: genderInput === '1' || genderInput === '3' ? 'M' : 'F',
        }))
        setInputValue(value)
        setError(prevError => ({ ...prevError, dob: '' }))
        return
      }
    }

    setInputValue(value)
    setError(prevError => ({
      ...prevError,
      dob: '올바른 형식으로 입력하세요',
    }))
  }

  return (
    <s.Container>
      <s.TitleContainer>
        <s.Title>주민등록번호</s.Title>
        <s.Title>앞 7자리를 적어주세요</s.Title>
      </s.TitleContainer>
      <s.InputContainer>
        <s.Input
          type="text"
          id="jumin"
          name="jumin"
          defaultValue={inputValue}
          onChange={handleInputChange}
          maxLength={8}
          placeholder="YYMMDD-S"
        />
      </s.InputContainer>
      <s.ErrorText>{error.dob}</s.ErrorText>
    </s.Container>
  )
}

export default BirthGenderInput
