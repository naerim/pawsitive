import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo6 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState(false)

  const handleButtonClick = (value: boolean) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, No6: value }))
  }
  return (
    <c.Container>
      <c.Title>
        앞으로 가족 수에 <br />
        변동이 있을 수 있나요?
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>
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

export default SurveyQuestionNo6
