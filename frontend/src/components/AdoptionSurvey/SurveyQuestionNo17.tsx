import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo17 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleInputChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, hospital: value }))
  }
  return (
    <c.Container>
      <c.Title>
        다니시는 (다니실 예정인) <br />
        동물병원이 있습니까? 있다면 <br />
        어느 병원인지 얘기해 주세요 <br />
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>

      <c.Input
        value={selectedValue}
        placeholder="참사랑 동물병원"
        onChange={e => handleInputChange(e.target.value)}
      />
    </c.Container>
  )
}

export default SurveyQuestionNo17
