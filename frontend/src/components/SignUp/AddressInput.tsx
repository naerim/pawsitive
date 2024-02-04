import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom } from '@src/stores/atoms/user'
import DaumPostcode from 'react-daum-postcode'
import { DaumPostData } from '@src/types/components/SignUpType'
import * as s from '@src/components/style/SignUpStyle'

const AddressInput = () => {
  const [, setSignUpData] = useAtom(signUpDataAtom)
  const [isOpen, setIsOpen] = useState(false)
  const [postalCode, setPostalCode] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [detailAddress, setDetailAddress] = useState<string>('')

  const handleDaumPostcodeOpen = () => {
    setIsOpen(true)
    setPostalCode('')
    setAddress('')
    setDetailAddress('')
  }

  const handleAddressComplete = (data: DaumPostData) => {
    setPostalCode(data.zonecode)
    setAddress(data.address)
    setIsOpen(false)
  }

  const handleDetailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const detailAddressInput = e.target.value
    setDetailAddress(detailAddressInput)

    const totalAddressInput: string = `${address} ${detailAddress}`
    setSignUpData(prevData => ({ ...prevData, address: totalAddressInput }))
  }

  return (
    <s.InputContainer>
      <s.InputLabel htmlFor="address">주소를 입력해주세요.</s.InputLabel>

      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <s.InputField value={postalCode} readOnly />
        <button type="button" onClick={handleDaumPostcodeOpen}>
          주소검색
        </button>
      </div>

      <s.InputField value={address} readOnly />

      <s.InputLabel htmlFor={detailAddress}>
        <s.InputField
          type="text"
          value={detailAddress}
          onChange={handleDetailAddress}
        />
      </s.InputLabel>

      {isOpen && (
        <div>
          <button type="button" onClick={() => setIsOpen(false)}>
            닫기
          </button>
          <DaumPostcode
            onComplete={handleAddressComplete}
            style={{ position: 'absolute', zIndex: 1000, width: '400px' }}
          />
        </div>
      )}
    </s.InputContainer>
  )
}

export default AddressInput
