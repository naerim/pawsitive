import * as c from '@src/components/ChattingRoom/_style/ChattingRoomHeaderStyle'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { DogType } from '@src/types/dogType'
import { fetchDogDetails } from '@src/apis/dog'

const ChattingRoomHeader = (props: { dogNo: number }) => {
  const { dogNo } = props
  const navigate = useNavigate()

  const goBack = () => navigate('/chat')

  const { data, isLoading } = useQuery<DogType | null>({
    queryKey: ['dogDetail'],
    queryFn: () => fetchDogDetails(dogNo),
  })

  return (
    <c.Container>
      <c.Wrap>
        {!isLoading && data && (
          <c.Top>
            <img
              src="/icon/icon_black_arrow_left.png"
              alt=""
              onClick={goBack}
            />
            <span>
              {data.userName} - {data.name}
            </span>
          </c.Top>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default ChattingRoomHeader
