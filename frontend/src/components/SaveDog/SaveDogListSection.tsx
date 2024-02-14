import { useAtomValue } from 'jotai/index'
import { useQuery } from '@tanstack/react-query'
import { userAtom } from '@src/stores/atoms/user'
import { fetchLikeDogList } from '@src/apis/dog'
import { RecommendDogResType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import * as s from '@src/components/style/SaveDogListSectionStyle'

const SaveDogListSection = () => {
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue

  const { data } = useQuery({
    queryKey: ['SaveDogList'],
    queryFn: () => fetchLikeDogList(userNo),
  })

  console.log(data)

  return (
    <s.Container>
      {data &&
        data.map((item: RecommendDogResType) => (
          <BasicDogInfoCard key={item.dogNo} dogInfo={item} />
        ))}
    </s.Container>
  )
}

export default SaveDogListSection
