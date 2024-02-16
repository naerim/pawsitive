import { useEffect, useState } from 'react'
import * as c from '@src/container/style/CommunityListContainerStyle'
import CommunityCategorySection from '@src/components/CommunityList/CommunityCategorySection'
import CommunityListSection from '@src/components/CommunityList/CommunityListSection'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityList } from '@src/apis/community'
import { CommunityResType } from '@src/types/communityType'

const CommunityListContainer = () => {
  const [category, setCategory] = useState(0)

  // 무한 스크롤 아직 구현 못함
  const { data, isLoading, refetch } = useQuery<CommunityResType>({
    queryKey: ['communityList'],
    queryFn: async () =>
      fetchCommunityList({
        page: 0,
        size: 30,
        sort: ['string'],
        categoryNo: category,
      }),
  })

  // const { data, fetchNextPage, hasNextPage, status, refetch } =
  //   useInfiniteQuery({
  //     queryKey: ['communityList'],
  //     initialPageParam: 1,
  //     queryFn: ({ pageParam }) => {
  //       console.log(pageParam)
  //       return fetchCommunityList({
  //         page: pageParam,
  //         size: 6,
  //         sort: ['string'],
  //         categoryNo: category,
  //       })
  //     },
  //     getNextPageParam: lastPage => {
  //       console.log(lastPage)
  //       if (!lastPage.next) {
  //         return undefined // No more pages to fetch
  //       }
  //       console.log('엥')
  //       return lastPage.number + 1 // 다음 페이지의 번호 반환
  //     },
  //     select: item => item.pages.flatMap(page => page.content),
  //   })
  //
  useEffect(() => {
    refetch().then(r => r)
  }, [category, refetch])
  //
  // const { setTarget } = useIntersectionObserver({
  //   hasNextPage,
  //   fetchNextPage,
  // })

  return (
    <c.Container>
      <c.Wrap>
        <CommunityCategorySection
          category={category}
          setCategory={setCategory}
        />
        {isLoading || !data ? (
          <p>Loading...</p>
        ) : (
          <div>
            <CommunityListSection data={data.content} />
          </div>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default CommunityListContainer
