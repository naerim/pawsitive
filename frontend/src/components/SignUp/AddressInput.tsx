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
    <s.Container>
      <s.TitleContainer>
        <s.Title>주소를 입력해주세요</s.Title>
      </s.TitleContainer>
      <s.ThreeInputContainer>
        <s.InputContainer>
          <s.Input value={postalCode} placeholder="우편번호" readOnly />
          <s.CheckButton onClick={handleDaumPostcodeOpen}>검색</s.CheckButton>
        </s.InputContainer>
        <s.InputContainer>
          <s.Input value={address} readOnly />
        </s.InputContainer>
        <s.InputContainer>
          <s.Input
            type="text"
            value={detailAddress}
            onChange={handleDetailAddress}
            placeholder="상세주소를 작성해주세요"
          />
        </s.InputContainer>
      </s.ThreeInputContainer>

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
    </s.Container>
  )
}

export default AddressInput
