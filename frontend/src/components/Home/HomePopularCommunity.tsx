import * as h from '@src/components/style/HomePopularCommunityStyle'
import LightColorMoveCard from '@src/common/LightColorMoveCard'
import { useQuery } from '@tanstack/react-query'
import { fetchPopularCommunity } from '@src/apis/community'
import { CommunityItemType } from '@src/types/components/CommunityType'

const HomePopularCommunity = () => {
  const { data, isLoading } = useQuery<CommunityItemType[]>({
    queryKey: ['popularCommunity'],
    queryFn: () => fetchPopularCommunity(2),
  })
  return (
    <h.Container>
      <h.SubTitle>커뮤니티 TOP 게시글</h.SubTitle>
      <h.Title>가장 인기있는 게시물이에요.</h.Title>
      <h.Wrap>
        {!isLoading ? (
          data &&
          data.map(item => (
            <h.Item key={item.board.boardNo}>
              <img alt="" src="/img/img_popular_community.png" />
              <div>
                <h.ItemTitle>{item.board.title}</h.ItemTitle>
                <h.ItemDesc>{item.board.content}</h.ItemDesc>
              </div>
            </h.Item>
          ))
        ) : (
          <div>로딩중</div>
        )}
      </h.Wrap>
      <LightColorMoveCard title="더 많은 게시글 살펴보기" url="/" />
    </h.Container>
  )
}

export default HomePopularCommunity
