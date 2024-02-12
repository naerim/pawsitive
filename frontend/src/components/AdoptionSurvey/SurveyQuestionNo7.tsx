import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo7 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleButtonClick = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      familyAgree: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        함께 거주하는 모든 구성원이
        <br />
        입양에 동의하시나요?
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>
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

export default SurveyQuestionNo7
