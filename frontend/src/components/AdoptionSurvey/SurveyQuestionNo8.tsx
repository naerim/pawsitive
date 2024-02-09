import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo8 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      alone_time: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        강아지가 하루에 혼자 <br />
        지내야 하는 시간을 알려주세요
      </c.Title>
      <c.Content>생활 환경에 관한 질문이에요</c.Content>

      <c.Input
        value={selectedValue}
        placeholder="5시간, 오후 시간대 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo8
