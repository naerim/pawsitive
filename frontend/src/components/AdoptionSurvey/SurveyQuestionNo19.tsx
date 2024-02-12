import * as c from '@src/components/style/AdoptionSurveyStyle'
import { useState } from 'react'
import { surveyDataAtom } from '@src/stores/atoms/survey'
import { useSetAtom } from 'jotai/index'

const SurveyQuestionNo19 = () => {
  const setSurveyData = useSetAtom(surveyDataAtom)
  const [selectedValue, setSelectedValue] = useState('')

  const handleButtonClick = (value: string) => {
    setSelectedValue(value)
    setSurveyData(prevData => ({ ...prevData, foreverResponsibility: value }))
  }
  return (
    <c.Container>
      <c.Title>
        강아지에게 장애가 생기거나 <br />
        질병으로 인하여 특별한 도움이 <br />
        필요하게 되는 경우에도 평생 <br />
        책임지실 수 있습니까? <br />
      </c.Title>
      <c.Content>책임감을 파악하기 위한 질문이에요</c.Content>
      <c.ButtonDiv>
        <c.Button
          onClick={() => handleButtonClick('true')}
          active={selectedValue === 'true'}
        >
          네
        </c.Button>
        <c.Button
          onClick={() => handleButtonClick('false')}
          active={selectedValue === 'false'}
        >
          아니요
        </c.Button>
      </c.ButtonDiv>
    </c.Container>
  )
}

export default SurveyQuestionNo19
