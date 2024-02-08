import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo16 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState(false)

  const handleButtonClick = (value: boolean) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, No16: value }))
  }
  return (
    <c.Container>
      <c.Title>
        입양을 원하시는 강아지 브리드
        <br />
        성격과 성질에 익숙합니까?
      </c.Title>
      <c.Content>생활 환경에 관한 질문이에요</c.Content>
      <c.ButtonDiv>
        <c.Button
          onClick={() => handleButtonClick(true)}
          active={selectedValue}
        >
          네
        </c.Button>
        <c.Button
          onClick={() => handleButtonClick(false)}
          active={!selectedValue}
        >
          아니요
        </c.Button>
      </c.ButtonDiv>
    </c.Container>
  )
}

export default SurveyQuestionNo16
