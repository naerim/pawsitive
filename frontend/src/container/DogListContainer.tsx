import * as d from '@src/components/style/DogListContainer'
import { useEffect, useState } from 'react'
import { BasicDogListParamsType, DogListType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import { useQuery } from '@tanstack/react-query'
import { fetchBasicDogList } from '@src/apis/dog'

const DogListContainer = () => {
  const [basicDogListParams, setBasicDogListParams] =
    useState<BasicDogListParamsType>({
      page: 1,
      size: 8,
      sort: ['string'],
    })
  const [basicDogList, setBasicDogList] = useState<DogListType[]>([])
  const [totalPageCnt, setTotalPageCnt] = useState(1)

  const { data, isLoading, isFetching } = useQuery<DogListType[]>({
    queryKey: ['basicDogList', basicDogListParams],
    queryFn: async () => {
      const result = await fetchBasicDogList(basicDogListParams)
      setTotalPageCnt(result.totalPages)
      return result.content
    },
  })

  useEffect(() => {
    if (!isFetching && data) {
      if (basicDogListParams.page === 0) {
        setBasicDogList(data)
      } else {
        setBasicDogList(prevList => [...prevList, ...data])
      }
    }
  }, [isFetching, basicDogListParams, data])

  useEffect(() => {
    const handleScroll = () => {
      if (
        totalPageCnt > basicDogListParams.page &&
        Math.ceil(window.innerHeight + window.scrollY) >=
          document.documentElement.offsetHeight
      ) {
        setBasicDogListParams(prevParams => {
          const newParams = {
            ...prevParams,
            page: prevParams.page + 1,
          }

          if (newParams.page <= totalPageCnt) {
            return newParams
          }
          return prevParams
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [basicDogListParams, totalPageCnt])

  if (isLoading && basicDogList.length === 0) {
    return (
      <d.Container>
        {Array.from({ length: 2 }, (_, index) => (
          <d.FakeDiv key={index} />
        ))}
      </d.Container>
    )
  }

  return (
    <d.Container>
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
