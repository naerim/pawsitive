import { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import { DaumPostData } from '@src/types/container/SignUpType'

const ShelterSignUpContainer = () => {
  const [address, setAddress] = useState('')
  const [isDaumPostcodeOpen, setIsDaumPostcodeOpen] = useState(false)
  const [buildingName, setBuilidngName] = useState('')

  const handleDaumPostcodeOpen = () => {
    setIsDaumPostcodeOpen(true)
  }

  const handleAddressComplete = (data: DaumPostData) => {
    setAddress(data.address)
    setBuilidngName(data.buildingName)
    setIsDaumPostcodeOpen(false)
  }

  return (
    <>
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
    </>
  )
}

export default ShelterSignUpContainer
