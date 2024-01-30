import CustomCard from '@src/common/CustomCard.tsx'

const QuestionSurveyCard = () => {
  return (
    <CustomCard>
      <div>입양이 처음이신가요?</div>
      <br />
      <button type="button">설문하기</button>
      <br />
      <button type="button">절차보기</button>
    </CustomCard>
  )
}

export default QuestionSurveyCard
