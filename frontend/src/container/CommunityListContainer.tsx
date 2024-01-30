import CommunityList from '@src/components/Community/CommunityList'
import { atom, useAtomValue } from 'jotai'
import { CommunityItemType } from '@src/types/components/CommunityType'
// import { useQuery } from '@tanstack/react-query'
// import { fetchCommunityList } from '@src/apis/community'

const dummyDataAtom = atom<CommunityItemType[]>([
  {
    contentNo: 1,
    title: '제목1',
    content: '내용1',
  },
  {
    contentNo: 2,
    title: '제목2',
    content: '내용2',
  },
  {
    contentNo: 3,
    title: '제목3',
    content: '내용3',
  },
])

const CommunityListContainer = () => {
  const dummyDataValue = useAtomValue(dummyDataAtom)
  // const { isLoading, data } = useQuery<CommunityItemType[]>({
  //   queryKey: ['Detail'],
  //   queryFn: () => fetchCommunityList(),
  // })

  return (
    // <div>
    //   {isLoading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <div>
    //       <CommunityList data={data} />
    //     </div>
    //   )}
    // </div>
    <div>
      <CommunityList data={dummyDataValue} />
    </div>
  )
}

export default CommunityListContainer
