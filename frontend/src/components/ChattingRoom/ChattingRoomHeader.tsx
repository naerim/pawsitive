import * as c from '@src/components/ChattingRoom/_style/ChattingRoomHeaderStyle'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { DogType } from '@src/types/dogType'
import { fetchDogDetails } from '@src/apis/dog'
import { useAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'

const ChattingRoomHeader = (props: { dogNo: number }) => {
  const [user] = useAtom(userAtom)
  const { dogNo } = props
  const navigate = useNavigate()

  const goBack = () => navigate('/chat')

  const { data, isLoading } = useQuery<DogType | null>({
    queryKey: ['dogDetail'],
    queryFn: () => fetchDogDetails(dogNo),
  })

  const goCreateAdoptedAppointment = () => navigate('/new/adopted-appointment')

  return (
    <c.Container>
      <c.Wrap>
        {!isLoading && data && (
          <>
            <c.TopWrap>
              <img
                className="arrow"
                src="/icon/icon_black_arrow_left.png"
                alt=""
                onClick={goBack}
              />
              <span>
                {data.userName} - {data.name}
              </span>
              <img
                className="call"
                src="/icon/icon_phone.png"
                alt=""
                onClick={goBack}
              />
            </c.TopWrap>
            <c.InfoWrap>
              <c.InfoDetailWrap>
                <img src={data.files[0]} alt="" />
                <span>
                  <div className="name">{data.name}</div>
                  <div>
                    {data.sex === 'f' ? '암컷' : '수컷'} ∙ 중성화{' '}
                    {data.neutralized ? '0' : 'X'} ∙ {data.age}
                    (년생) ∙ {data.kind}
                  </div>
                </span>
              </c.InfoDetailWrap>
              <c.ButtonWrap>
                <button type="button" onClick={goCreateAdoptedAppointment}>
                  입양약속 잡기
                </button>
                <button type="button" onClick={goCreateAdoptedAppointment}>
                  입양약속 보기
                </button>
                {user.role === 'SHELTER' && (
                  <button type="button">입양설문 보기</button>
                )}
              </c.ButtonWrap>
            </c.InfoWrap>
          </>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default ChattingRoomHeader
