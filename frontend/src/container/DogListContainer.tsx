import * as d from '@src/components/style/DogListContainer'
import { useEffect, useState } from 'react'
import { DogListType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import { useQuery } from '@tanstack/react-query'
import { fetchBasicDogList } from '@src/apis/dog'
import Filter from '@src/components/DogList/Filter'
import { useAtom } from 'jotai'
import { dogListParamsAtom } from '@src/stores/atoms/dog'

const DogListContainer = () => {
  const [basicDogListParams, setBasicDogListParams] = useAtom(dogListParamsAtom)
  const [basicDogList, setBasicDogList] = useState<DogListType[]>([])
  // const [totalPageCnt, setTotalPageCnt] = useState(7)
  const [isFilter, setIsFilter] = useState(false)

  const { isLoading, isFetching, refetch } = useQuery<DogListType[]>({
    queryKey: ['basicDogList'],
    queryFn: async () => {
      const result = await fetchBasicDogList(basicDogListParams)
      // setTotalPageCnt(result.totalPages)
      return result.content
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

  if (isLoading && basicDogList.length === 0) {
    return (
      <d.Container>
        <div>
          <button type="button" onClick={showFilterHandle}>
            필터링
          </button>
          {isFilter && <Filter />}
        </div>
        {Array.from({ length: 2 }, (_, index) => (
          <d.FakeDiv key={index} />
        ))}
      </d.Container>
    )
  }

  return (
    <d.Container>
      <div>
        <button type="button" onClick={showFilterHandle}>
          필터링
        </button>
        {isFilter && <Filter />}
      </div>
      {basicDogList.map(basicDogInfo => (
        <BasicDogInfoCard key={basicDogInfo.dogNo} dogInfo={basicDogInfo} />
      ))}
      {isFetching && (
        <>
          <d.FakeDiv />
          <d.FakeDiv />
        </>
      )}
    </d.Container>
  )
}

export default DogListContainer
