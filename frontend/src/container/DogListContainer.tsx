import * as d from '@src/components/style/DogListContainer'
import { useEffect, useState } from 'react'
import { BasicDogListParamsType, BasicDogType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import { useQuery } from '@tanstack/react-query'
import { fetchBasicDogList } from '@src/apis/dog'

const DogListContainer = () => {
  const [basicDogListParams, setBasicDogListParams] =
    useState<BasicDogListParamsType>({
      page: 0,
      size: 12,
      sort: ['string'],
    })
  const [basicDogList, setBasicDogList] = useState<BasicDogType[]>([])

  const { data, isLoading, isFetching } = useQuery<BasicDogType[]>({
    queryKey: ['basicDogList', basicDogListParams],
    queryFn: async () => {
      const result = await fetchBasicDogList(basicDogListParams)
      return result.content
    },
  })

  useEffect(() => {
    if (data) {
      console.log(data)
      setBasicDogList(prevList => [...prevList, ...data])
    }
  }, [isFetching, data])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setBasicDogListParams(prevParams => ({
        ...prevParams,
        page: prevParams.page + 1,
      }))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (isLoading && basicDogList.length === 0) {
    return (
      <d.Container>
        {Array.from({ length: 6 }, (_, index) => (
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
