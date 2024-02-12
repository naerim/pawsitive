import * as d from '@src/components/style/DogListContainer'
import { useEffect, useState } from 'react'
import { DogListType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import { useQuery } from '@tanstack/react-query'
import { fetchBasicDogList } from '@src/apis/dog'
import Filter from '@src/components/DogList/Filter'
import { useAtom } from 'jotai'
import { dogListParamsAtom } from '@src/stores/atoms/dog'
import TextHeader from '@src/common/TextHeader'

const DogListContainer = () => {
  const [basicDogListParams, setBasicDogListParams] = useAtom(dogListParamsAtom)
  const [basicDogList, setBasicDogList] = useState<DogListType[]>([])
  // const [totalPageCnt, setTotalPageCnt] = useState(7)
  const [isFilter, setIsFilter] = useState(false)

  const { isLoading, isFetching, refetch } = useQuery<DogListType[]>({
    queryKey: ['basicDogList'],
    queryFn: async () => {
      if (basicDogListParams) {
        const result = await fetchBasicDogList(basicDogListParams)
        setBasicDogList(result.content || [])
        // setTotalPageCnt(result.totalPages)
        return result.content || []
      }
      return []
    },
  })

  useEffect(() => {
    refetch().then(r => r)
  }, [basicDogListParams, refetch])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       totalPageCnt > basicDogListParams.page &&
  //       Math.ceil(window.innerHeight + window.scrollY) >=
  //         document.documentElement.offsetHeight
  //     ) {
  //       setBasicDogListParams(prevParams => {
  //         const newParams = {
  //           ...prevParams,
  //           page: prevParams.page + 1,
  //         }
  //
  //         if (newParams.page <= totalPageCnt) {
  //           return newParams
  //         }
  //         return prevParams
  //       })
  //     }
  //   }
  //
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [basicDogListParams, totalPageCnt])

  const showFilterHandle = () => {
    setIsFilter(!isFilter)
  }

  const LoadingSkeleton = () => (
    <>
      {Array.from({ length: 6 }, (_, index) => (
        <d.FakeDiv key={index} />
      ))}
    </>
  )

  return (
    <d.Container>
      <TextHeader title="유기견 공고 리스트" />
      <d.FilterContainer>
        <d.ShowFilterButton type="button" onClick={showFilterHandle}>
          필터링
          <d.ShowFilterButtonImg
            isShow={isFilter}
            src="public/img/img_chevron_down.png"
          />
        </d.ShowFilterButton>
        {isFilter && <Filter />}
      </d.FilterContainer>
      <d.DogListContainer>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          basicDogList.map(basicDogInfo => (
            <BasicDogInfoCard key={basicDogInfo.dogNo} dogInfo={basicDogInfo} />
          ))
        )}
      </d.DogListContainer>
    </d.Container>
  )
}

export default DogListContainer
