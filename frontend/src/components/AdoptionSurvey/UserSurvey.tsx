import * as c from '@src/components/style/UserSurveyStyle'
import { useQuery } from '@tanstack/react-query'
import { fetchSurveyGet } from '@src/apis/survey'
import { useNavigate, useParams } from 'react-router-dom'

const UserSurvey = () => {
  const { userNo } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ['userSurveyData'],
    queryFn: () => fetchSurveyGet(Number(userNo)),
  })

  const goBack = () => navigate(-1)

  return (
    <c.Container>
      {!isLoading && data && (
        <c.Box>
          <c.HeaderDiv>
            <c.BackButton aria-label="Previous Step">
              <img
                src="/icon/icon_gray_arrow_left.png"
                alt=""
                onClick={goBack}
              />
            </c.BackButton>
            <c.Header>000님의 입양 설문</c.Header>
          </c.HeaderDiv>
          <c.Question>
            <c.Number>&nbsp;&nbsp;1.</c.Number>
            <c.Title>현재 거주하고 계신 집의 형태를 알려주세요</c.Title>
          </c.Question>
          <c.Content>{data.accommodationType}</c.Content>

          <c.Question>
            <c.Number>&nbsp;&nbsp;2.</c.Number>
            <c.Title>
              구조견의 급식 배변 산책 등의 보살핌을 <br />
              담당할 사람을 알려주세요
            </c.Title>
          </c.Question>
          <c.Content>{data.carer}</c.Content>

          <c.Question>
            <c.Number>&nbsp;&nbsp;3.</c.Number>
            <c.Title>반려견을 입양을 결심하게 된 이유를 알려주세요</c.Title>
          </c.Question>
          <c.Content>{data.reason}</c.Content>

          <c.Question>
            <c.Number>&nbsp;&nbsp;4.</c.Number>
            <c.Title>함께 거주 중인 가족 형태를 알려주세요</c.Title>
          </c.Question>
          <c.Content>{data.familyType}</c.Content>

          <c.Question>
            <c.Number>&nbsp;&nbsp;5.</c.Number>
            <c.Title>함께 살고 있는 가족 구성원에 대해 알려주세요</c.Title>
          </c.Question>
          <c.Content>{data.familyIntroduce}</c.Content>

          <c.Question>
            <c.Number>&nbsp;&nbsp;6.</c.Number>
            <c.Title>앞으로 가족 수에 변동이 있을 수 있나요?</c.Title>
          </c.Question>
          <c.Content>{data.familyAdd === 'true' ? '네' : '아니요'}</c.Content>

          <c.Question>
            <c.Number>&nbsp;&nbsp;7.</c.Number>
            <c.Title> 함께 거주하는 모든 구성원이 입양에 동의하시나요?</c.Title>
          </c.Question>
          <c.Content>{data.familyAgree === 'true' ? '네' : '아니요'}</c.Content>

          <c.Question>
            <c.Number>&nbsp;&nbsp;8.</c.Number>
            <c.Title>
              강아지가 하루에 혼자 지내야 하는 시간을 <br />
              알려주세요
            </c.Title>
          </c.Question>
          <c.Content>{data.aloneTime}</c.Content>
          <c.Question>
            <c.Number>&nbsp;&nbsp;9.</c.Number>
            <c.Title>집이 비는 경우 강아지는 어디에서 지내나요?</c.Title>
          </c.Question>
          <c.Content>{data.temporaryResidence}</c.Content>
          <c.Question>
            <c.Number>10.</c.Number>
            <c.Title>
              반려동물을 키우신 적이 있거나 현재 기르시고 계시는 반려동물이
              있으신가요?
            </c.Title>
          </c.Question>
          <c.Content>{data.raiseHistory}</c.Content>
          <c.Question>
            <c.Number>11.</c.Number>
            <c.Title>
              반려동물과 함께 한 기간이 언제부터 언제까지인지 써주세요
            </c.Title>
          </c.Question>
          <c.Content>{data.raiseTerm}</c.Content>
          <c.Question>
            <c.Number>12.</c.Number>
            <c.Title>
              현재 키우시는 반려동물이 있거나 키웠던 경우, 어떤 경로로 함께 하게
              되었나요?
            </c.Title>
          </c.Question>
          <c.Content>{data.petRoute}</c.Content>
          <c.Question>
            <c.Number>13.</c.Number>
            <c.Title>
              현재 키우는 반려동물이 있는 경우, 그 반려동물은 다른 동물들과
              지내는 일에 익숙합니까?
            </c.Title>
          </c.Question>
          <c.Content>
            {data.petSociability === 'true' ? '네' : '아니요'}
          </c.Content>
          <c.Question>
            <c.Number>14.</c.Number>
            <c.Title>
              반려동물을 키우셨으나 지금 키우지 않고 있으시다면 이유를
              설명해주세요
            </c.Title>
          </c.Question>
          <c.Content>{data.raiseNoReason}</c.Content>
          <c.Question>
            <c.Number>15.</c.Number>
            <c.Title>
              입양을 원하시는 강아지 브리드 성격과 성질에 익숙합니까?
            </c.Title>
          </c.Question>
          <c.Content>{data.personality === 'true' ? '네' : '아니요'}</c.Content>
          <c.Question>
            <c.Number>16.</c.Number>
            <c.Title>
              강아지가 짖거나, 분리 불안이 있는 등의 행동 교정이 필요한 경우,
              적절한 훈련이 필요할수 있습니다. 어떤 방법으로 훈련해주실건지
              알려주세요
            </c.Title>
          </c.Question>
          <c.Content>{data.training}</c.Content>
          <c.Question>
            <c.Number>17.</c.Number>
            <c.Title>
              다니시는 (다니실 예정인) 동물병원이 있습니까? 있다면 어느 병원인지
              얘기해 주세요
            </c.Title>
          </c.Question>
          <c.Content>{data.hospital}</c.Content>
          <c.Question>
            <c.Number>18.</c.Number>
            <c.Title>
              강아지가 병원 치료나 수술을 받을 상황이 된다면 현실적으로 어느
              정도 의 병원비까지 부담이 가능한가요?
            </c.Title>
          </c.Question>
          <c.Content>{data.expenditure}</c.Content>
          <c.Question>
            <c.Number>19.</c.Number>
            <c.Title>
              강아지에게 장애가 생기거나 질병으로 인하여 특별한 도움이 필요하게
              되는 경우에도 평생 책임지실 수 있습니까?
            </c.Title>
          </c.Question>
          <c.Content>
            {data.foreverResponsibility === 'true' ? '네' : '아니요'}
          </c.Content>
        </c.Box>
      )}
    </c.Container>
  )
}
export default UserSurvey
