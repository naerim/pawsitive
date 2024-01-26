import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import { DaumPostData } from '@src/types/container/SignUpType'

const ShelterSignUpContainer = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [isDaumPostcodeOpen, setIsDaumPostcodeOpen] = useState(false)
  const [buildingName, setBuilidngName] = useState('')
  const [detailAddress, setDetailAddress] = useState('')

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
  return (
    <>
      <label htmlFor="name">
        보호소 이름
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <div>
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
                style={{ position: 'absolute', zIndex: 100, width: 200 }}
              />
            </div>
          )}
          <input
            placeholder="주소를 검색해주세요"
            onClick={handleDaumPostcodeOpen}
            defaultValue={address}
          />
        </label>
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
    </>
  )
}

export default ShelterSignUpContainer
