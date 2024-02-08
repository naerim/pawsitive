import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo19 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, No19: value }))
  }
  return (
    <c.Container>
      <c.Title>
        강아지가 병원 치료나 수술을 받을 <br />
        상황이 된다면 현실적으로 어느 정도 <br />의 병원비까지 부담이
        가능한가요? <br />
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>

      <c.Input
        value={selectedValue}
        placeholder="전액 부담 가능"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo19
