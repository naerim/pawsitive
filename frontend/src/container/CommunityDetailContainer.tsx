import CommunityDetail from '@src/components/Community/CommunityDetail'
import { CommunityDetailType } from '@src/types/components/CommunityType'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchCommunityDetail } from '@src/apis/community'
// import { CommunityDetailAtom } from '@src/stores/atoms/community'

const CommunityDetailContainer = () => {
  const { contentNo } = useParams<{ contentNo: string }>()

  // useQuery로 데이터 받아오기
  const { isLoading, data } = useQuery<CommunityDetailType>({
    queryKey: ['Detail'],
    queryFn: () => fetchCommunityDetail(Number(contentNo)),
  })

  // community detail 페이지에서는 굳이 atom 사용하지 않아도 될 것 같아서 일단 주석처리 하겠습니다!
  // const [CommunityDetailValue, setCommunityDetail] =
  //   useAtom(CommunityDetailAtom)
  // useEffect(() => {
  //   if (data) {
  //     setCommunityDetail(data)
  //   }
  // }, [data, setCommunityDetail])
  return (
    <div>
      {/* {isLoading || !CommunityDetailValue ? (      */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <CommunityDetail data={data} />
        </div>
      )}
    </div>
  )
}

export default CommunityDetailContainer
