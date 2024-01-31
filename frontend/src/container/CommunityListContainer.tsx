import CommunityList from '@src/components/Community/CommunityList'
import { CommunityItemType } from '@src/types/components/CommunityType'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityList } from '@src/apis/community'
import { CommunityListAtom } from '@src/stores/atoms/community'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const CommunityListContainer = () => {
  const { isLoading, data } = useQuery<CommunityItemType[]>({
    queryKey: ['List'],
    queryFn: () => fetchCommunityList(),
  })

  const [CommunityListValue, setCommunityList] = useAtom(CommunityListAtom)

  useEffect(() => {
    if (data) {
      setCommunityList(data)
    }
  }, [data, setCommunityList])

  return (
    <div>
      {isLoading || !CommunityListValue || CommunityListValue.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <CommunityList data={CommunityListValue} />
        </div>
      )}
    </div>
  )
}

export default CommunityListContainer
