import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo14 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      raiseNoReason: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        반려동물을 키우셨으나 <br />
        지금 키우지 않고 있으시다면 <br />
        이유를 설명해주세요
      </c.Title>
      <c.Content>경험에 관한 질문이에요</c.Content>
      <c.TextArea
        value={selectedValue}
        placeholder="교육이 쉽지 않아서 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo14
