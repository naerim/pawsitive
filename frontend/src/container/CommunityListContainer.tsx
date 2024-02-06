import { useEffect, useState } from 'react'
import * as c from '@src/container/style/CommunityListContainerStyle'
import CommunityCategorySection from '@src/components/CommunityList/CommunityCategorySection'
import CommunityListSection from '@src/components/CommunityList/CommunityListSection'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchCommunityList } from '@src/apis/community'
import { useIntersectionObserver } from '@src/hooks/useIntersectionObserver'

const CommunityListContainer = () => {
  const [category, setCategory] = useState(0)
  const [pageParam, setPageParam] = useState(1)

  const { data, fetchNextPage, hasNextPage, status, refetch } =
    useInfiniteQuery({
      queryKey: ['communityList', { category }],
      initialPageParam: 1,
      queryFn: () =>
        fetchCommunityList({
          page: pageParam,
          size: 6,
          sort: ['string'],
          categoryNo: category,
        }),
      getNextPageParam: lastPage => {
        console.log(lastPage)
        if (!lastPage.next) {
          return undefined // No more pages to fetch
        }
        setPageParam(pageParam + 1)
        return lastPage.number + 1 // 다음 페이지의 번호 반환
      },
      select: item => item.pages.flatMap(page => page.content),
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
            <CommunityListSection data={data} setTarget={setTarget} />
          </div>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default CommunityListContainer
