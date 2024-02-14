import { useAtomValue } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import { useQuery } from '@tanstack/react-query'
import { fetchLikeDogList } from '@src/apis/dog'
import SaveDogListSection from '@src/components/SaveDog/SaveDogListSection'
import * as s from '@src/container/style/SaveDogListContainerStyle'

const SaveDogsListContainer = () => {
  const userValue = useAtomValue(userAtom)
  const { userNo } = userValue

  const { data } = useQuery({
    queryKey: ['SaveDogList'],
    queryFn: () => fetchLikeDogList(userNo),
  })

  return (
    <s.Container>
      <div>관심공고페이지</div>
      <SaveDogListSection data={data} />
    </s.Container>
  )
}

export default SaveDogsListContainer
