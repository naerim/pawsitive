import CommunityList from '@src/components/Community/CommunityList'
import { CommunityItemType } from '@src/types/components/CommunityType'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityList } from '@src/apis/community'

const CommunityListContainer = () => {
  const { isLoading, data } = useQuery<CommunityItemType[]>({
    queryKey: ['List'],
    queryFn: () => fetchCommunityList(),
  })

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <CommunityList data={data} />
        </div>
      )}
    </div>
  )
}

export default CommunityListContainer
