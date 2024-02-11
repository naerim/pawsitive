import AdoptedDogDetail from '@src/components/AdoptedDog/AdoptedDogMod.tsx'
import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { fetchAdoptedDogDetail } from '@src/apis/adoptDog'

const AdoptedDogDetailContainer = () => {
  const user = useAtomValue(userAtom)
  const { data, isLoading } = useQuery({
    queryKey: ['adoptedDogDetail'],
    queryFn: () => fetchAdoptedDogDetail(user.userNo),
  })

  console.log(data)
  return <div>{!isLoading && <AdoptedDogDetail data={data} />} </div>
}

export default AdoptedDogDetailContainer
