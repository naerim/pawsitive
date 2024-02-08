import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo15 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, No15: value }))
  }
  return (
    <c.Container>
      <c.Title>
        반려동물을 키워본 적이 없으신 경우, <br /> 왜 키우지 않으셨는지 이유를
        설명해 주세요.
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>
      <c.TextArea
        value={selectedValue}
        placeholder="제대로 키우리 못할 것 같아서 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo15
