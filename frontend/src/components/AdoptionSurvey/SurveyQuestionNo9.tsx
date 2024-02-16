import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo9 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      temporaryResidence: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        집이 비는 경우 <br />
        강아지는 어디에서 지내나요?
      </c.Title>
      <c.Content>생활 환경에 관한 질문이에요</c.Content>

      <c.Input
        value={selectedValue}
        placeholder="호텔링, 친구집 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo9
