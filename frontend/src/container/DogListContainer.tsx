import * as d from '@src/container/style/DogListContainerStyle'
import { useEffect, useState } from 'react'
import { DogListType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import { useQuery } from '@tanstack/react-query'
import { fetchBasicDogList } from '@src/apis/dog'
import Filter from '@src/components/DogList/Filter'
import { useAtom } from 'jotai'
import { dogListParamsAtom } from '@src/stores/atoms/dog'
import TextHeader from '@src/common/TextHeader'
import { userAtom } from '@src/stores/atoms/user'
import LoadingSkeleton from '@src/components/DogList/LoadingSkeleton'
import AlarmNoData from '@src/components/DogList/AlarmNoData'
import MonthDogList from '@src/components/DogList/MonthDogList'

const DogListContainer = () => {
  const [basicDogListParams] = useAtom(dogListParamsAtom)
  // const [totalPageCnt, setTotalPageCnt] = useState(7)
  const [isFilter, setIsFilter] = useState(false)
  const [allDogList, setAllDogList] = useState([])
  const [user] = useAtom(userAtom)

  const { data, isLoading, refetch } = useQuery<DogListType[]>({
    queryKey: ['basicDogList'],
    // eslint-disable-next-line consistent-return
    queryFn: async () => {
      if (basicDogListParams) {
        const result = await fetchBasicDogList({
          ...basicDogListParams,
          userNo: user.userNo,
        })
        // setBasicDogList(result.content || [])
        // setTotalPageCnt(result.totalPages)
        if (allDogList.length === 0) {
          setAllDogList(result.content || [])
        }
        return result.content || []
      }
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

  return (
    <>
      <TextHeader title="유기견 공고 리스트" />
      <d.Container>
        <d.FilterContainer>
          <d.ShowFilterButton onClick={showFilterHandle}>
            필터링
            <d.ShowFilterButtonImg
              $isShow={isFilter}
              src="img/img_chevron_down.png"
            />
          </d.ShowFilterButton>
          {isFilter && <Filter />}
        </d.FilterContainer>

        <MonthDogList />
        {/* eslint-disable-next-line no-nested-ternary */}
        {isLoading ? (
          <d.DogListContainerStyle>
            <LoadingSkeleton />
          </d.DogListContainerStyle>
        ) : data &&
          data.length === 0 &&
          basicDogListParams.kind.length === 0 ? (
          <AlarmNoData allDogList={allDogList} />
        ) : (
          <d.DogListContainerStyle>
            {data &&
              data.map(basicDogInfo => (
                <BasicDogInfoCard
                  key={basicDogInfo.dogNo}
                  dogInfo={basicDogInfo}
                />
              ))}
          </d.DogListContainerStyle>
        )}
      </d.Container>
    </>
  )
}

export default DogListContainer
