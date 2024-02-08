import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo11 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, No11: value }))
  }
  return (
    <c.Container>
      <c.Title>
        반려동물을 키우신 적이 있거나 <br />
        키우고 계시다면 반려한 기간이 언제부터 언제까지인지 써주세요
      </c.Title>
      <c.Content>생활 환경에 관한 질문이에요</c.Content>
      <c.TextArea
        value={selectedValue}
        placeholder="종, 성별, 나이, 기간 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo11
