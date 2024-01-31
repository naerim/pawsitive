import * as d from '@src/components/style/DailyQuestionStyle'

const DailyQuestion = () => {
  return (
    <d.Container>
      <d.Letter src="img/image_letter.png" alt="Dog Bone" />
      <d.Title>오늘의 질문이 도착했어요</d.Title>
      <d.Button>&gt;</d.Button>
    </d.Container>
  )
}

export default DailyQuestion
