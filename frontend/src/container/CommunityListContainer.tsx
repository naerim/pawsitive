import { useEffect, useState } from 'react'
import * as c from '@src/container/style/CommunityListContainerStyle'
import CommunityCategorySection from '@src/components/CommunityList/CommunityCategorySection'
import CommunityListSection from '@src/components/CommunityList/CommunityListSection'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchCommunityList } from '@src/apis/community'
import { useIntersectionObserver } from '@src/hooks/useIntersectionObserver'

const CommunityListContainer = () => {
  const [category, setCategory] = useState(0)

  const { data, fetchNextPage, hasNextPage, status, refetch } =
    useInfiniteQuery({
      queryKey: ['communityList', { category }],
      initialPageParam: 0,
      queryFn: () =>
        fetchCommunityList({
          page: 0,
          size: 8,
          sort: ['string'],
          categoryNo: category,
        }),
      getNextPageParam: lastPage => {
        const num = lastPage.number
        if (lastPage.totalPages === num) return false
        return num + 1
      },
      select: item => {
        return {
          pages: item.pages[0],
          pageParams: item.pageParams,
        }
      },
    })

  useEffect(() => {
    refetch().then(r => r)
  }, [category, refetch])

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  })

  return (
    <c.Container>
      <c.Wrap>
        <CommunityCategorySection
          category={category}
          setCategory={setCategory}
        />
        {status === 'pending' || !data ? (
          <p>Loading...</p>
        ) : (
          <div>
            <CommunityListSection data={data.pages.content} />
            <c.Box ref={setTarget} className="box" />
          </div>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default CommunityListContainer
