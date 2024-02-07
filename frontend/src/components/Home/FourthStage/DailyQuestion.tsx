import * as d from '@src/components/style/DailyQuestionStyle'
import { useNavigate } from 'react-router-dom'

const DailyQuestion = () => {
  const navigate = useNavigate()

  const handleContainerClick = () => navigate('/questions/new')

  return (
    <div>
      <d.Container onClick={handleContainerClick}>
        <d.DogBone src="img/img_dog_bones.png" alt="Dog Bone" />
        <d.Title>오늘의 질문이 도착했어요</d.Title>
        <d.SubTitle>반려견에 한걸음 더 다가가요.</d.SubTitle>
      </d.Container>
    </div>
  )
}

export default DailyQuestion
