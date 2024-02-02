import CommunityList from '@src/components/Community/CommunityList'
import {
  CommunityItemType,
  CommunityListType,
} from '@src/types/components/CommunityType'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityList } from '@src/apis/community'
import { CommunityListAtom } from '@src/stores/atoms/community'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'

const CommunityListContainer: React.FC = () => {
  const { isLoading, data } = useQuery<CommunityListType[]>({
    queryKey: ['communityList'],
    queryFn: () => fetchCommunityList(),
  })
  const [CommunityListValue, setCommunityList] =
    useAtom<CommunityItemType[]>(CommunityListAtom)

  useEffect(() => {
    if (data && data.content) {
      setCommunityList(data.content as CommunityListType[])
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
