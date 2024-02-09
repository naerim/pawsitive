import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo16 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, training: value }))
  }
  return (
    <c.Container>
      <c.Title>
        강아지가 짖거나, 분리 불안이 있는 등의 행동 교정이 필요한 경우, <br />
        적절한 훈련이 필요할수 있습니다. <br /> 어떤 방법으로 훈련해주실건지
        <br /> 알려주세요.
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>
      <c.TextArea
        value={selectedValue}
        placeholder="전문가에게 훈련시킬 예정 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo16
