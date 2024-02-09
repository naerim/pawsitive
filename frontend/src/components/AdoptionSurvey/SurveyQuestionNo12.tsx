import * as c from '@src/components/style/AdoptionSurveyStyle'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo12 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleCheckboxChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({
      ...prevData,
      pet_route: value,
    }))
  }
  return (
    <c.Container>
      <c.Title>
        현재 키우시는 반려동물이 있거나 <br /> 키웠던 경우, 어떤 경로로 함께
        하게 <br /> 되었나요?
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>
      <c.CheckBoxDiv>
        {['유기동물 입양', '전문 브리더를 통해', '펫샵을 통해', '기타'].map(
          value => (
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
          ),
        )}
      </c.CheckBoxDiv>
    </c.Container>
  )
}

export default SurveyQuestionNo12
