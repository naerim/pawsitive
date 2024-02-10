import { useNavigate } from 'react-router-dom'
import LightColorMoveCard from '@src/common/LightColorMoveCard'
import * as h from '@src/components/style/HomeDictionaryStyle'
import { useAtom } from 'jotai/index'
import { DictionaryCategoryAtom } from '@src/stores/atoms/dictionary'

const HomeDictionary = () => {
  const navigate = useNavigate()
  const [, setCategory] = useAtom(DictionaryCategoryAtom)

  const cardClick = (num: number) => {
    setCategory(num)
    navigate(`/dictionary`)
  }

  return (
    <h.Container>
      <h.SubTitle>펫과사전 행동교육</h.SubTitle>
      <h.Title>다양한 내용들을 미리 알아봐요!</h.Title>
      <h.Wrap>
        <h.Item onClick={() => cardClick(1)}>
          <h.ItemTitle>펫티켓</h.ItemTitle>
          <h.ItemSubTitle>자세히 알아보기</h.ItemSubTitle>
          <img alt="" src="/img/img_show_dog_card.png" />
        </h.Item>
        <h.Item onClick={() => cardClick(2)}>
          <h.ItemTitle>질병정보</h.ItemTitle>
          <h.ItemSubTitle>자세히 알아보기</h.ItemSubTitle>
          <img alt="" src="/img/img_dog_medication.png" />
        </h.Item>
        <h.Item onClick={() => cardClick(3)}>
          <h.ItemTitle>행동교육</h.ItemTitle>
          <h.ItemSubTitle>자세히 알아보기</h.ItemSubTitle>
          <img alt="" src="/img/img_dog_poo.png" />
        </h.Item>
        <h.Item onClick={() => cardClick(4)}>
          <h.ItemTitle>애견상식</h.ItemTitle>
          <h.ItemSubTitle>자세히 알아보기</h.ItemSubTitle>
          <img alt="" src="/img/img_popular_community.png" />
        </h.Item>
      </h.Wrap>
      <LightColorMoveCard title="더 많은 펫과사전 찾아보기" url="/dictionary" />
    </h.Container>
  )
}

export default HomeDictionary
