import { useNavigate } from 'react-router-dom'
import * as s from '../_style/ShowDogCardStyle'

const ShowDogCard = () => {
  const navigate = useNavigate()
  const goDogList = () => navigate('/dogs')

  return (
    <s.Container>
      <s.Image src="/img/img_show_dog_card.png" alt="" />
      <s.Title>세상에 귀여운 강아지는 많다!</s.Title>
      <s.SubTitle>나와 잘 맞는 강아지를 알아보세요!</s.SubTitle>
      <s.Button type="button" onClick={goDogList}>
        강아지 공고 둘러보기
      </s.Button>
    </s.Container>
  )
}

export default ShowDogCard
