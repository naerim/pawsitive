import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo12 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, No12: value }))
  }
  return (
    <c.Container>
      <c.Title>
        반려동물을 키우셨으나 <br />
        지금 키우지 않고 있으신다면 <br />
        이유를 설명해주세요
      </c.Title>
      <c.Content>생활 환경에 관한 질문이에요</c.Content>
      <c.TextArea
        value={selectedValue}
        placeholder="종, 성별, 나이 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo12
