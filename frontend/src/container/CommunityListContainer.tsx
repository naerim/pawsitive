import { CommunityItemType } from '@src/types/components/CommunityType'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchCommunityByFilter, fetchCommunityList } from '@src/apis/community'
import {
  CommunityCategoryAtom,
  CommunityListAtom,
} from '@src/stores/atoms/community'
import { useAtom } from 'jotai'
import React, { useEffect, useRef, useState } from 'react'
import * as c from '@src/container/style/CommunityListContainerStyle'
import CommunityCategorySection from '@src/components/CommunityList/CommunityCategorySection'
import CommunityListSection from '@src/components/CommunityList/CommunityListSection'
import { useLocation } from 'react-router-dom'

const Index: React.FC = () => {
  const [CommunityCategoryValue, setCommunityCategory] = useAtom(
    CommunityCategoryAtom,
  )
  const [LoadList, setLoadList] = useState(true)
  const isMounted = useRef(false)
  const location = useLocation()

  const { isLoading, data } = useQuery({
    queryKey: ['communityList'],
    queryFn: () => fetchCommunityList(setCommunityList),
    enabled: LoadList,
  })

  const [CommunityListValue, setCommunityList] =
    useAtom<CommunityItemType[]>(CommunityListAtom)

  const { mutate } = useMutation({
    mutationKey: ['communityCategory'],
    mutationFn: async num => {
      if (num !== 0) {
        const result = await fetchCommunityByFilter(num, setCommunityList)
        return result
      }
      const result = await fetchCommunityList(setCommunityList)
      return result
    },
    onSuccess(): void {
      console.log('mutate 성공')
    },
  })

  useEffect(() => {
    if (isMounted.current) {
      setCommunityCategory(0)
      setLoadList(true)
    }
  }, [])

  useEffect(() => {
    isMounted.current = true
  }, [])

  useEffect(() => {
    mutate(CommunityCategoryValue)
  }, [CommunityCategoryValue, isMounted, setLoadList])

  useEffect(() => {
    if (data && data.content) {
      setCommunityList(data.content)
    }
  }, [data, setCommunityList, mutate])

  useEffect(() => {
    // Check if the route changed to '/community' and set LoadList to true
    if (location.pathname === '/community') {
      setLoadList(true)
    }
  }, [location.pathname])

  return (
    <c.Container>
      <c.Wrap>
        <CommunityCategorySection />
        {isLoading || !CommunityListValue ? (
          <p>Loading...</p>
        ) : (
          <div>
            <CommunityListSection data={CommunityListValue} />
          </div>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default Index
