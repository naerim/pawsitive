import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo10 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      raise_history: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        반려동물을 키우신 적이 있거나 <br />
        현재 기르시고 계시는 <br />
        반려동물이 있으신가요?
      </c.Title>
      <c.Content>경험에 관한 질문이에요</c.Content>
      <c.TextArea
        value={selectedValue}
        placeholder="종, 성별, 나이 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo10
