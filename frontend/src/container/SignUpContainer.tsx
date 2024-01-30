import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import { DaumPostData } from '@src/types/container/SignUpType'
import { joinUser } from '@src/apis/user'

const SignUpContainer = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [dob, setDob] = useState('')
  const [dobError, setDobError] = useState('')
  const [gender, setGender] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const [address, setAddress] = useState('')
  const [isDaumPostcodeOpen, setIsDaumPostcodeOpen] = useState(false)
  const [buildingName, setBuilidngName] = useState('')
  const [detailAddress, setDetailAddress] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleCheckEmail = () => {
    // email 인증 로직 추가
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const confirmPasswordInput = e.target.value
    setConfirmPassword(confirmPasswordInput)

    if (password !== confirmPasswordInput) {
      setPasswordError('비밀번호가 일치하지 않습니다.')
    } else setPasswordError('')
  }

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

  const handleDaumPostcodeOpen = () => {
    setIsDaumPostcodeOpen(true)
    setAddress('')
    setDetailAddress('')
    setBuilidngName('')
  }

  const handleAddressComplete = (data: DaumPostData) => {
    setAddress(data.address)
    setBuilidngName(data.buildingName)
    setIsDaumPostcodeOpen(false)
  }

  const handleDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const detailAddressInput = e.target.value

    setDetailAddress(detailAddressInput)
  }
  const onSubmitSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const role = 'USER'
    const totalAddress = `${address} ${buildingName} ${detailAddress}`
    const userData = { email, password, name, address: totalAddress, role }
    joinUser(userData)
  }

  return (
    <form onSubmit={onSubmitSignUp}>
      <h2>NEW ACCOUNT</h2>
      <div>
        <label htmlFor="id">E-mail:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="button" onClick={handleCheckEmail}>
          인증번호 받기
        </button>
      </div>

      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div>
        <label htmlFor="confirmPassword">비밀번호 확인:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <div>{passwordError}</div>
      </div>

      <div>
        <label htmlFor="name">이름 </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <div>{nameError}</div>
      </div>

      <div>
        <label htmlFor="dob">생년월일 </label>
        <input
          type="text"
          id="dob"
          name="dob"
          value={dob}
          onChange={handleDobChange}
          placeholder="YYYY.MM.DD"
          required
        />
        <div>{dobError}</div>
      </div>

      <div>
        <label htmlFor="gender">성별 </label>
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
      </div>

      <div>
        <label htmlFor="phoneNumber">핸드폰 번호 </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="010-1234-5678"
          required
        />
        <div>{phoneNumberError}</div>
      </div>

      <div>
        <label htmlFor="address">주소 </label>
        {isDaumPostcodeOpen && (
          <div>
            <button type="button" onClick={() => setIsDaumPostcodeOpen(false)}>
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
          onClick={handleDaumPostcodeOpen}
          defaultValue={address}
          readOnly
        />
      </div>

      <div>{buildingName && <input defaultValue={buildingName} />}</div>
      <div>
        <label htmlFor={detailAddress}>
          상세 주소
          <input
            type="text"
            placeholder="상세 주소"
            onChange={handleDetailAddress}
          />
        </label>
      </div>

      <button type="submit">회원가입</button>
    </form>
  )
}

export default SignUpContainer
