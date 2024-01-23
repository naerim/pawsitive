import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import { DaumPostData } from '@src/types/container/SignUpType'

const SignUpContainer = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [dob, setDob] = useState('')
  const [dobError, setDobError] = useState('')
  const [gender, setGender] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const [address, setAddress] = useState('')
  const [isDaumPostcodeOpen, setIsDaumPostcodeOpen] = useState(false)

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

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const genderSelect = e.target.value

    setGender(genderSelect)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let phoneNumberInput = e.target.value

    phoneNumberInput = phoneNumberInput.replace(/[^\d-]/g, '')
    phoneNumberInput = phoneNumberInput.slice(0, 13)

    if (phoneNumberInput.length > 3 && phoneNumberInput[3] !== '-') {
      phoneNumberInput = `${phoneNumberInput.substring(0, 3)}-${phoneNumberInput.substring(3)}`
    }
    if (phoneNumberInput.length > 8 && phoneNumberInput[8] !== '-') {
      phoneNumberInput = `${phoneNumberInput.substring(0, 8)}-${phoneNumberInput.substring(8)}`
    }

    setPhoneNumber(phoneNumberInput)

    const isValidPhoneNumberInput = () =>
      /^010-\d{4}-\d{4}$/.test(phoneNumberInput)

    if (!isValidPhoneNumberInput()) {
      setPhoneNumberError('올바른 핸드폰 번호 형식이 아닙니다.')
    } else {
      setPhoneNumberError('')
    }
  }

  const handleAddressComplete = (data: DaumPostData) => {
    setAddress(data.address)
    setIsDaumPostcodeOpen(false)
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

        <label htmlFor="gender">
          성별
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
            남성
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
            여성
          </div>
        </label>

        <label htmlFor="phoneNumber">
          핸드폰 번호
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="010-1234-5678"
            required
          />
        </label>
        <div>{phoneNumberError}</div>

        <label htmlFor="address">
          주소
          {isDaumPostcodeOpen && (
            <div>
              <button
                type="button"
                onClick={() => setIsDaumPostcodeOpen(false)}
              >
                닫기
              </button>
              <DaumPostcode
                onComplete={handleAddressComplete}
                style={{ position: 'absolute', zIndex: 1000 }}
              />
            </div>
          )}
          <input
            placeholder="주소를 검색해주세요"
            onClick={() => setIsDaumPostcodeOpen(true)}
            defaultValue={address}
          />
        </label>
      </div>
    </>
  )
}

export default SignUpContainer
