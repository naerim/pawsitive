import React from 'react'
import { useAtom } from 'jotai'
import { createDogInfoAtom } from '@src/stores/atoms/dog'
import * as s from '@src/components/style/CreateDogInfoStyle'

const CreateDogInfo = () => {
  const [createDogData, setCreateDogData] = useAtom(createDogInfoAtom)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.value
    setCreateDogData(prevData => ({ ...prevData, name: nameInput }))
  }

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ageInput = Number(e.target.value)
    setCreateDogData(prevData => ({ ...prevData, age: ageInput }))
  }

  const handleKindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const kindInput = e.target.value
    setCreateDogData(prevData => ({ ...prevData, kind: kindInput }))
  }

  const handleSexChange = (sex: string) => {
    setCreateDogData(prevData => ({ ...prevData, sex }))
  }

  const handleIsNaturalizedChange = (isNaturalized: boolean) => {
    setCreateDogData(prevData => ({ ...prevData, isNaturalized }))
  }

  return (
    <s.Container>
      <s.InputContainer>
        <s.Label htmlFor="name">이름</s.Label>
        <s.Input
          id="name"
          type="text"
          value={createDogData.name}
          onChange={handleNameChange}
          placeholder="이름을 입력해주세요."
        />
      </s.InputContainer>
      <s.InputContainer>
        <s.Label htmlFor="age">추정 출생연도</s.Label>
        <s.Input
          type="text"
          value={createDogData.age !== 0 ? createDogData.age : ''}
          onChange={handleAgeChange}
          placeholder="ex) 2023"
        />
      </s.InputContainer>
      <s.InputContainer>
        <s.Label htmlFor="kind">품종</s.Label>
        <s.Input
          type="text"
          value={createDogData.kind}
          onChange={handleKindChange}
          placeholder="닮은 강아지 품종을 적어줘도 좋아요!"
        />
      </s.InputContainer>
      <s.InputContainer>
        <s.Label>성별</s.Label>
        <s.RadioButtonContainer>
          <s.RadioButton
            isSelected={createDogData.sex === 'M'}
            onClick={() => handleSexChange('M')}
          >
            수컷
          </s.RadioButton>
          <s.RadioButton
            isSelected={createDogData.sex === 'F'}
            onClick={() => handleSexChange('F')}
          >
            암컷
          </s.RadioButton>
        </s.RadioButtonContainer>
      </s.InputContainer>

      <s.InputContainer>
        <s.Label>중성화 여부</s.Label>
        <s.RadioButtonContainer>
          <s.RadioButton
            isSelected={createDogData.isNaturalized}
            onClick={() => handleIsNaturalizedChange(true)}
          >
            중성화 O
          </s.RadioButton>
          <s.RadioButton
            isSelected={!createDogData.isNaturalized}
            onClick={() => handleIsNaturalizedChange(false)}
          >
            중성화 X
          </s.RadioButton>
        </s.RadioButtonContainer>
      </s.InputContainer>
    </s.Container>
  )
}

export default CreateDogInfo
