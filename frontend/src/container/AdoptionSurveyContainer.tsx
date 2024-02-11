import * as c from '@src/container/style/AdoptionSurveyContainerStyle'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useNavigate } from 'react-router-dom'
import { surveyDataAtom, surveyStepAtom } from '@src/stores/atoms/survey'
import SurveyQuestionNo1 from '@src/components/AdoptionSurvey/SurveyQuestionNo1'
import SurveyQuestionNo2 from '@src/components/AdoptionSurvey/SurveyQuestionNo2'
import SurveyQuestionNo3 from '@src/components/AdoptionSurvey/SurveyQuestionNo3'
import SurveyQuestionNo4 from '@src/components/AdoptionSurvey/SurveyQuestionNo4'
import SurveyQuestionNo5 from '@src/components/AdoptionSurvey/SurveyQuestionNo5'
import SurveyQuestionNo6 from '@src/components/AdoptionSurvey/SurveyQuestionNo6'
import SurveyQuestionNo7 from '@src/components/AdoptionSurvey/SurveyQuestionNo7'
import SurveyQuestionNo8 from '@src/components/AdoptionSurvey/SurveyQuestionNo8'
import SurveyQuestionNo9 from '@src/components/AdoptionSurvey/SurveyQuestionNo9'
import SurveyQuestionNo10 from '@src/components/AdoptionSurvey/SurveyQuestionNo10'
import SurveyQuestionNo11 from '@src/components/AdoptionSurvey/SurveyQuestionNo11'
import SurveyQuestionNo12 from '@src/components/AdoptionSurvey/SurveyQuestionNo12'
import SurveyQuestionNo13 from '@src/components/AdoptionSurvey/SurveyQuestionNo13'
import SurveyQuestionNo14 from '@src/components/AdoptionSurvey/SurveyQuestionNo14'
import SurveyQuestionNo15 from '@src/components/AdoptionSurvey/SurveyQuestionNo15'
import SurveyQuestionNo16 from '@src/components/AdoptionSurvey/SurveyQuestionNo16'
import SurveyQuestionNo17 from '@src/components/AdoptionSurvey/SurveyQuestionNo17'
import SurveyQuestionNo18 from '@src/components/AdoptionSurvey/SurveyQuestionNo18'
import SurveyQuestionNo19 from '@src/components/AdoptionSurvey/SurveyQuestionNo19'
import SurveyQuestionSection1 from '@src/components/AdoptionSurvey/SurveyQuestionSection1'
import SurveyQuestionSection2 from '@src/components/AdoptionSurvey/SurveyQuestionSection2'
import { useEffect } from 'react'
import SurveyProgress from '@src/components/AdoptionSurvey/SurveyProgress'

const AdoptionSurveyContainer = () => {
  const [surveyStep, setSurveyStep] = useAtom(surveyStepAtom)
  const [user, setUser] = useAtom(userAtom)
  const navigate = useNavigate()
  const [surveyData, setSurveyData] = useAtom(surveyDataAtom)

  useEffect(() => {
    setSurveyData(prevData => ({
      ...prevData,
      user_no: user.userNo,
    }))
  }, [setSurveyData, user.userNo])

  const handlePrevPage = () => {
    navigate(-1)
  }

  const handlePrevStep = () => {
    setSurveyStep(prevStep => prevStep - 1)
  }

  const handleNextStep = () => {
    setSurveyStep(prevStep => prevStep + 1)
  }

  const goDone = () => {
    // console.log(surveyData)
    setUser(currentUser => ({ ...currentUser, stage: 2 }))
    console.log(surveyData)
    navigate('/mypage/survey/done')
  }

  const renderStepComponent = () => {
    switch (surveyStep) {
      case 1:
        return <SurveyQuestionSection1 />
      case 2:
        return <SurveyQuestionNo1 />
      case 3:
        return <SurveyQuestionNo2 />
      case 4:
        return <SurveyQuestionNo3 />
      case 5:
        return <SurveyQuestionNo4 />
      case 6:
        return <SurveyQuestionNo5 />
      case 7:
        return <SurveyQuestionNo6 />
      case 8:
        return <SurveyQuestionNo7 />
      case 9:
        return <SurveyQuestionNo8 />
      case 10:
        return <SurveyQuestionSection2 />
      case 11:
        return <SurveyQuestionNo9 />
      case 12:
        return <SurveyQuestionNo10 />
      case 13:
        return <SurveyQuestionNo11 />
      case 14:
        return <SurveyQuestionNo12 />
      case 15:
        return <SurveyQuestionNo13 />
      case 16:
        return <SurveyQuestionNo14 />
      case 17:
        return <SurveyQuestionNo15 />
      case 18:
        return <SurveyQuestionNo16 />
      case 19:
        return <SurveyQuestionNo17 />
      case 20:
        return <SurveyQuestionNo18 />
      case 21:
        return <SurveyQuestionNo19 />

      default:
        return null
    }
  }

  return (
    <c.Container>
      <c.BackButtonContainer>
        {surveyStep > 1 ? (
          <c.BackButton aria-label="Previous Step">
            <img
              src="/icon/icon_gray_arrow_left.png"
              alt=""
              onClick={handlePrevStep}
            />
          </c.BackButton>
        ) : (
          <c.BackButton aria-label="Previous Step">
            <img
              src="/icon/icon_gray_arrow_left.png"
              alt=""
              onClick={handlePrevPage}
            />
          </c.BackButton>
        )}
      </c.BackButtonContainer>
      <SurveyProgress step={surveyStep} />
      <c.InputContainer>
        {renderStepComponent()}
        <c.Step>{surveyStep} / 21</c.Step>
        <c.ButtonContainer>
          {surveyStep < 21 && (
            <c.Button onClick={handleNextStep}>다음</c.Button>
          )}
          {surveyStep === 21 && (
            <c.Button onClick={goDone}>설문 작성 완료</c.Button>
          )}
        </c.ButtonContainer>
      </c.InputContainer>
    </c.Container>
  )
}

export default AdoptionSurveyContainer
