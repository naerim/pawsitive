import { fetchDogDetails } from '@src/apis/dog'
import { useQuery } from '@tanstack/react-query'
import { DogDetailInfoType } from '@src/types/components/DogDetailType'

const DogDetailInfo = () => {
  const { isLoading, data } = useQuery<DogDetailInfoType>({
    queryKey: ['Detail'],
    queryFn: () => fetchDogDetails(1),
  })

  return (
    <div>
      <h1>강아지 디테일</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{data && data.name}</h2>
          <p>보호소: {data && data.shelter}</p>
          <p>중성화 여부: {data && data.neutralized}</p>
          <p>설명: {data && data.description}</p>
        </div>
      )}
    </div>
  )
}

export default DogDetailInfo
