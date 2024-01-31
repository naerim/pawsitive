import * as h from '@src/components/style/HomeRecommendDogStyle'
import LightColorMoveCard from '@src/common/LightColorMoveCard'

const HomeRecommendDog = () => {
  return (
    <h.Container>
      <h.SubTitle>나와 잘 맞는 강아지</h.SubTitle>
      <h.Title>저와 함께 행복하게 살아요!</h.Title>
      <h.Wrap>
        <h.Item>
          <img src="/img/img_dog1.png" alt="" />
          <h.ItemTitle>충청-00450949</h.ItemTitle>
          <h.ItemSubTitle>수컷 ∙ 중성화X</h.ItemSubTitle>
          <h.ItemSubTitle>2021(년생) ∙ 13kg</h.ItemSubTitle>
        </h.Item>
        <h.Item>
          <img src="/img/img_dog2.png" alt="" />
          <h.ItemTitle>경상-00178394</h.ItemTitle>
          <h.ItemSubTitle>암컷 ∙ 중성화X</h.ItemSubTitle>
          <h.ItemSubTitle>2023(년생) ∙ 9kg</h.ItemSubTitle>
        </h.Item>
      </h.Wrap>
      <LightColorMoveCard title="더 많은 강아지 찾아보기" url="/" />
    </h.Container>
  )
}
export default HomeRecommendDog
