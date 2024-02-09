import * as c from '@src/components/style/AdoptionSurveyStyle'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo4 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleCheckboxChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      family_type: selectedValue,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        함께 거주 중인 <br /> 가족 형태를 알려주세요
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>
      <c.CheckBoxDiv>
        {[
          '부부와 자녀',
          '1인 가구',
          '동거 커플',
          '결혼 예정의 동거 커플',
          '결혼한 2인 가구',
        ].map(value => (
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

export default SurveyQuestionNo4
