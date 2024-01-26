import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import { DaumPostData } from '@src/types/container/SignUpType'

const ShelterSignUpContainer = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [isDaumPostcodeOpen, setIsDaumPostcodeOpen] = useState(false)
  const [buildingName, setBuilidngName] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.value
    setName(nameInput)
  }
  const handleDaumPostcodeOpen = () => {
    setIsDaumPostcodeOpen(true)
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

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const handleCheckDuplicate = () => {
    // 아이디 중복 확인 로직을 추가
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPasswordError('')
    // 실제 회원가입 로직을 추가
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">보호소 이름 </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        required
      />

      <div>
        <label htmlFor="address"> </label>
        {isDaumPostcodeOpen && (
          <div>
            <button type="button" onClick={() => setIsDaumPostcodeOpen(false)}>
              닫기
            </button>
            <DaumPostcode
              onComplete={handleAddressComplete}
              style={{ position: 'absolute', zIndex: 100, width: 200 }}
            />
          </div>
        )}
        <input
          placeholder="주소를 검색해주세요"
          onClick={handleDaumPostcodeOpen}
          defaultValue={address}
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

      <label htmlFor="id">아이디:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={id}
        onChange={handleIdChange}
      />
      <button type="button" onClick={handleCheckDuplicate}>
        중복확인
      </button>

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
        {passwordError && <div>{passwordError}</div>}
      </div>

      <div>
        <button type="submit">회원가입</button>
      </div>
    </form>
  )
}

export default ShelterSignUpContainer
