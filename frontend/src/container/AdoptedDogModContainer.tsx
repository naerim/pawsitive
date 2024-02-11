import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import AdoptedDogMod from '@src/components/AdoptedDog/AdoptedDogMod'
import { fetchAdoptedDogDetail } from '@src/apis/adoptDog'

const AdoptedDogModContainer = () => {
  const user = useAtomValue(userAtom)
  const { data, isLoading } = useQuery({
    queryKey: ['adoptedDogDetail'],
    queryFn: () => fetchAdoptedDogDetail(user.userNo),
  })

  console.log(data)
  return <div>{!isLoading && <AdoptedDogMod data={data} />} </div>
}

export default AdoptedDogModContainer
