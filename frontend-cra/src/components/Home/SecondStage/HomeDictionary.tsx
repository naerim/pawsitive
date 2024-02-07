import { useNavigate } from 'react-router-dom'
import LightColorMoveCard from '@common/LightColorMoveCard'
import * as h from '../_style/HomeDictionaryStyle'

const HomeDictionary = () => {
  const navigate = useNavigate()

  const cardClick = (num: number) => {
    navigate(`/dictionary/${num}`)
  }

  return (
    <h.Container>
      <h.SubTitle>펫과사전 행동교육</h.SubTitle>
      <h.Title>다양한 활동들을 미리 알아봐요!</h.Title>
      <h.Wrap>
        <h.Item onClick={() => cardClick(1)}>
          <h.ItemTitle>산책활동</h.ItemTitle>
          <h.ItemSubTitle>자세히 알아보기</h.ItemSubTitle>
          <img alt="" src="/img/img_popular_community.png" />
        </h.Item>
        <h.Item onClick={() => cardClick(3)}>
          <h.ItemTitle>켄넬교육</h.ItemTitle>
          <h.ItemSubTitle>교육 알아보기</h.ItemSubTitle>
          <img alt="" src="/img/img_show_dog_card.png" />
        </h.Item>
        <h.Item onClick={() => cardClick(8)}>
          <h.ItemTitle>배변교육</h.ItemTitle>
          <h.ItemSubTitle>교육 확인하기</h.ItemSubTitle>
          <img alt="" src="/img/img_dog_poo.png" />
        </h.Item>
        <h.Item onClick={() => cardClick(9)}>
          <h.ItemTitle>투약방법</h.ItemTitle>
          <h.ItemSubTitle>자세한 방법 확인하기</h.ItemSubTitle>
          <img alt="" src="/img/img_dog_medication.png" />
        </h.Item>
      </h.Wrap>
      <LightColorMoveCard title="더 많은 펫과사전 찾아보기" url="/dictionary" />
    </h.Container>
  )
}

export default HomeDictionary
