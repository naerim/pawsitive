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
        console.log('lastPage', lastPage)
        const num = lastPage.number
        if (lastPage.totalPages === num) return false
        return num + 1
      },
      select: item => {
        console.log('item은', item)
        return {
          pages: item.pages[0],
          pageParams: item.pageParams,
        }
      },
    })

  useEffect(() => {
    refetch()
  }, [category, refetch])

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  })

  console.log(data)
  // const { isLoading, data, refetch } = useQuery({
  //   queryKey: ['communityList'],
  //   queryFn: async () => {
  //     const res = await fetchCommunityList({
  //       page: 0,
  //       size: 1,
  //       sort: ['string'],
  //       categoryNo: 2,
  //     })
  //     console.log('res', res)
  //     return res
  //   },
  // })

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
          </div>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default CommunityListContainer
