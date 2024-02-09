import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo11 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      raise_term: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        반려동물과 함께 한 기간이 <br />
        언제부터 언제까지인지 써주세요
      </c.Title>
      <c.Content>경험에 관한 질문이에요</c.Content>
      <c.TextArea
        value={selectedValue}
        placeholder="2015년 ~ 현재 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo11
