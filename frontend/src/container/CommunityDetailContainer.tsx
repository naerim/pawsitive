import CommunityDetail from '@src/components/Community/CommunityDetail'
import { CommunityItemType } from '@src/types/components/CommunityType'
import { atom, useAtomValue } from 'jotai'
// import { useParams } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { fetchCommunityDetail } from '@src/apis/community'

const dummyDataAtom = atom([
  {
    contentNo: 1,
    title: '제목123',
    content: '내용123',
  },
])
const CommunityDetailContainer = () => {
  const [dummyDataValue] = useAtomValue<CommunityItemType[]>(dummyDataAtom)
  // const { contentNo } = useParams<{ contentNo: string }>()
  //
  // // useQuery로 데이터 받아오기
  // const { isLoading, data } = useQuery<CommunityItemType[]>({
  //   queryKey: ['Detail'],
  //   queryFn: () => fetchCommunityDetail(Number(contentNo)),
  // })

  return (
    // <div>
    //   {isLoading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <div>
    //       {/* <CommunityDetail data={data} /> */}
    //     </div>
    //   )}
    // </div>
    <div>
      <CommunityDetail data={dummyDataValue} />
    </div>
  )
}

export default CommunityDetailContainer
