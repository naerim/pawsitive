import * as a from '@src/components/style/AdoptionSurveyInfoStyle'
import { useNavigate } from 'react-router-dom'

const AdoptionSurveyInfo = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <a.Container>
      <a.CloseButton type="button" onClick={goBack}>
        X
      </a.CloseButton>
      <a.Title>입양 설문</a.Title>
      <h1>1. 유의사항 안내</h1>
      <div>
        <h2>[강아지를 입양하기 전 충분히 고려해주세요]</h2>
        <p>고려하라는 내용</p>
        <h2>[입양 절차 안내]</h2>
        <p>절차 안내 네 가지</p>
        <p>안내문 꼼꼼히 읽고 넘어가주세요</p>
        <input type="checkbox" />
        네
        <br />
        <br />
      </div>
      <div>
        <h2>2. 신청서 접수</h2>
        <p>[수료증 업로드 안내?]</p>
        <br />
      </div>
      <div>
        <h2>3. 개인 정보 수입 및 이용 동의</h2>
        <br />
      </div>
      <div>
        <h2>4. 답변 작성</h2>
        <br />
      </div>
    </a.Container>
  )
}

export default AdoptionSurveyInfo
