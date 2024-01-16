import React, { useState } from 'react'

const SignUpContainer = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [dob, setDob] = useState('')
  const [dobError, setDobError] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.value
    setName(nameInput)

    if (nameInput.length < 2 || nameInput.length > 20) {
      setNameError('실명을 입력해주세요.')
    } else setNameError('')
  }

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let dobInput = e.target.value

    dobInput = dobInput.replace(/[^\d.]/g, '')
    dobInput = dobInput.slice(0, 10)

    if (dobInput.length > 4 && dobInput[4] !== '.') {
      dobInput = `${dobInput.substring(0, 4)}.${dobInput.substring(4)}`
    }
    if (dobInput.length > 7 && dobInput[7] !== '.') {
      dobInput = `${dobInput.substring(0, 7)}.${dobInput.substring(7)}`
    }

    setDob(dobInput)

    const isNumberDobInput = () => /^\d{4}\.\d{2}\.\d{2}$/.test(dobInput)

    if (!isNumberDobInput()) {
      setDobError('8자리 숫자로 입력해주세요.')
    } else setDobError('')

    const [year, month, day] = dobInput.split('.').map(Number)

    const isValidYear = year >= 1900 && year <= new Date().getFullYear()
    const isValidMonth = month >= 1 && month <= 12
    const isValidDay = day >= 1 && day <= 31

    const isValidDobInput = isValidYear && isValidMonth && isValidDay

    if (!isValidDobInput) {
      setDobError('올바른 날짜 형식이 아닙니다.')
    } else {
      setDobError('')
    }
  }

  return (
    <>
      <h2>NEW ACCOUNT</h2>
      <div>
        <label htmlFor="name">
          이름
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <div>{nameError}</div>

        <label htmlFor="dob">
          생년월일
          <input
            type="text"
            id="dob"
            name="dob"
            value={dob}
            onChange={handleDobChange}
            placeholder="YYYY.MM.DD"
            required
          />
        </label>
        <div>{dobError}</div>
      </div>
    </>
  )
}

export default SignUpContainer
