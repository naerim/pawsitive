import * as h from '@src/components/style/HomePopularCommunityStyle'
import LightColorMoveCard from '@src/common/LightColorMoveCard'

const HomePopularCommunity = () => {
  return (
    <h.Container>
      <h.SubTitle>커뮤니티 TOP 게시글</h.SubTitle>
      <h.Title>가장 인기있는 게시물이에요.</h.Title>
      <h.Wrap>
        <h.Item>
          <img alt="" src="/img/img_popular_community.png" />
          <div>
            <h.ItemTitle>광주천 근처 떠돌이 강아지</h.ItemTitle>
            <h.ItemDesc>
              지난 30일, 구조단체와 함께 유기견 '맑음이'를 나나나
            </h.ItemDesc>
          </div>
        </h.Item>
        <h.Item>
          <img alt="" src="/img/img_popular_community.png" />
          <div>
            <h.ItemTitle>광주천 근처 떠돌이 강아지</h.ItemTitle>
            <h.ItemDesc>
              지난 30일, 구조단체와 함께 유기견 '맑음이'를 나나나
            </h.ItemDesc>
          </div>
        </h.Item>
      </h.Wrap>
      <LightColorMoveCard title="더 많은 게시글 살펴보기" url="/" />
    </h.Container>
  )
}

export default HomePopularCommunity
