import CustomCard from '@src/common/CustomCard'
import QuestionSurveyCard from '@src/components/Home/FirstStage/QuestionSurveyCard'

const Index = () => {
  return (
    <div>
      <QuestionSurveyCard />
      <CustomCard>
        <div style={{ height: 200 }}>추천 컴포넌트</div>
      </CustomCard>
    </div>
  )
}

export default Index
