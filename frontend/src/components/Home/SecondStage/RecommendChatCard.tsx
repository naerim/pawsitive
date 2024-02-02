import * as f from '@src/components/style/RecommendChatCardStyle'
import { useNavigate } from 'react-router-dom'

const RecommendChatCard = () => {
  const navigate = useNavigate()

  const handleContainerClick = () => {
    navigate('/save-dogs-list')
  }

  return (
    <f.Container onClick={handleContainerClick}>
      <f.SubTitle>다음 단계 넘어가기</f.SubTitle>
      <f.Title>관심있는 공고가 있네요.</f.Title>
      <f.Title>채팅을 시작해볼까요?</f.Title>
      <f.DogHouse src="img/img_stage2_home.png" alt="stage2_home" />
      <f.Button>관심 공고 리스트 보러가기</f.Button>
    </f.Container>
  )
}

export default RecommendChatCard
