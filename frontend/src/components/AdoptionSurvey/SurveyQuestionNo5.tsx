import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo5 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      familyIntroduce: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        함께 살고 있는 가족 <br />
        구성원에 대해 알려주세요
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>

      <c.TextArea
        value={selectedValue}
        placeholder="본인, 부모님, 자녀 등"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo5
