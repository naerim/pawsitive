import * as c from '@src/components/style/AdoptionSurveyStyle'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo3 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleCheckboxChange = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, No3: value }))
  }
  return (
    <c.Container>
      <c.Title>
        반려견을 입양을 <br /> 결심하게 된 이유를 알려주세요
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>
      <c.CheckBoxDiv>
        {[
          '반려견이 귀여워서',
          '기존의 반려견에게 친구를 만들어 주기 위해',
          '가족을 위해서',
          '아이들이 강아지를 원해서',
          '집 지키는 강아지를 키우기 위해서',
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

export default SurveyQuestionNo3
