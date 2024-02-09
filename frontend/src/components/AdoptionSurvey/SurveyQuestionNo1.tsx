import * as c from '@src/components/style/AdoptionSurveyStyle'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo1 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleCheckboxChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      accommodation_type: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        현재 거주하고 계신 <br /> 집의 형태를 알려주세요
      </c.Title>
      <c.Content>경제력을 파악하기 위한 질문이에요</c.Content>
      <c.CheckBoxDiv>
        {['아파트', '빌라', '개인주택', '오피스텔', '기타'].map(value => (
          <label key={value}>
            <c.CheckBoxLabel>
              <Checkbox
                value={value}
                checked={selectedValue === value}
                onChange={() => handleCheckboxChange(value)}
                sx={{
                  '&.Mui-checked': {
                    color: '#fd9132',
                  },
                }}
              />
              <c.CheckBoxOk>{value}</c.CheckBoxOk>
            </c.CheckBoxLabel>
          </label>
        ))}
      </c.CheckBoxDiv>
    </c.Container>
  )
}

export default SurveyQuestionNo1
