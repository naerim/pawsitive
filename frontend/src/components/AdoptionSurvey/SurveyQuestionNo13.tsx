import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo13 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleButtonClick = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      pet_sociability: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        현재 키우는 반려동물이 있는 경우, <br />
        그 반려동물은 다른 동물들과 지내는 <br />
        일에 익숙합니까?
      </c.Title>
      <c.Content>생활 환경에 관한 질문이에요</c.Content>
      <c.ButtonDiv>
        <c.Button
          onClick={() => handleButtonClick('true')}
          active={selectedValue === 'true'}
        >
          네
        </c.Button>
        <c.Button
          onClick={() => handleButtonClick('false')}
          active={selectedValue === 'false'}
        >
          아니요
        </c.Button>
      </c.ButtonDiv>
    </c.Container>
  )
}

export default SurveyQuestionNo13
