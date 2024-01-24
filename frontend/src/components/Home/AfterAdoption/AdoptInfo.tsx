import { AfterAdoptionUserInfo } from '@src/types/userType'
import { useQuery } from '@tanstack/react-query'
import { fetchAfterAdoptionUser } from '@src/apis/user'

const AdoptInfo = () => {
  const { data, isLoading } = useQuery<AfterAdoptionUserInfo>({
    queryKey: ['afterAdoptionUser'],
    queryFn: () => fetchAfterAdoptionUser(),
  })
  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div>
      <div>함께한지 : {data && data.adoptedDays}일</div>
      <div>{data && data.answerCount}개의 답변이 있어요.</div>
      <div>{data && data.memoryCount}개의 추억일기가 있어요.</div>
    </div>
  )
}

export default AdoptInfo
