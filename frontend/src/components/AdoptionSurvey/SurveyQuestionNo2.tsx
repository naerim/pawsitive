import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo2 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, No2: value }))
  }
  return (
    <c.Container>
      <c.Title>
        구조견의 급식 배변 산책 등의 <br />
        보살핌을 담당할 사람을 알려주세요
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>

      <c.Input
        value={selectedValue}
        placeholder="본인, 부모님, 자녀 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo2
