import { CommunityDetailType } from '@src/types/components/CommunityType'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityDetail } from '@src/apis/community'
import styled from 'styled-components'
import CommunityFileSection from '@src/components/CommunityDetail/CommunityFileSection'
import UserName from '@src/components/CommunityDetail/UserName'
import CommunityContent from '@src/components/CommunityDetail/CommunityContent'
import CommunityDetailMap from '@src/components/CommunityDetail/CommunityDetailMap'

const Container = styled.div`
  padding-bottom: 80px;
`

const CommunityDetailContainer = () => {
  const { contentNo } = useParams<{ contentNo: string }>()
  // const [DetailData, setDetailData] = useState<CommunityDetailType>([])

  // useQuery로 데이터 받아오기
  const { isLoading, data } = useQuery<CommunityDetailType>({
    queryKey: ['Detail'],
    queryFn: () => fetchCommunityDetail(Number(contentNo)),
  })

  return (
    <Container>
      {!isLoading && data ? (
        <div>
          <CommunityFileSection
            images={data.board.images}
            title={data.board.title}
            category={data.board.communityCategoryName}
            hit={data.board.hit}
          />
          {/* TODO 여기에 단계별 이미지랑 주소 넣기 */}
          <UserName
            memberName={data.board.memberName}
            memberAddress={data.board.memberAddress}
          />
          <CommunityContent content={data.board.content} />
          <CommunityDetailMap
            latitude={data.board.latitude}
            longitude={data.board.longitude}
          />
        </div>
      ) : (
        '로딩중'
      )}
    </Container>
  )
}
export default CommunityDetailContainer
