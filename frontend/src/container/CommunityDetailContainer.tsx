import CommunityDetail from '@src/components/Community/CommunityDetail'
import { CommunityItemType } from '@src/types/components/CommunityType'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityDetail } from '@src/apis/community'

const CommunityDetailContainer = () => {
  const { contentNo } = useParams<{ contentNo: string }>()

  // useQuery로 데이터 받아오기
  const { isLoading, data } = useQuery<CommunityItemType>({
    queryKey: ['Detail'],
    queryFn: () => fetchCommunityDetail(Number(contentNo)),
  })

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <CommunityDetail data={data} />
        </div>
      )}
    </div>
  )
}

export default CommunityDetailContainer
