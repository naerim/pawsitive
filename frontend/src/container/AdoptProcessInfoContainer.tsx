import TextHeader from '@src/common/TextHeader'
import * as a from '@src/container/style/AdoptProgressInfoContainerStyle'

const AdoptProgressInfoContainer = () => {
  return (
    <a.Container>
      <TextHeader title="입양 단계 안내" />
      <a.StepContainer>
        <a.StepImg src="img/img_step_speaker.png" />
        <a.StepTitle>공고확인</a.StepTitle>
        <a.StepSubTitle>
          추천되는 유기견 공고를 확인해보세요. <br />
          다양한 유기견이 궁금하다면 공고 페이지에서
          <br /> 더 많은 유기견을 둘러보세요. <br />
          관심이 가는 유기견은 좋아요를 눌러보세요.
        </a.StepSubTitle>
      </a.StepContainer>
      <a.StepContainer>
        <a.StepImg src="img/img_step_survey.png" />
        <a.StepTitle>입양 설문 제출</a.StepTitle>
        <a.StepSubTitle>
          보호소가 입양 희망자 분에 대해서 알 수 있도록 입양 설문을
          입력해주세요. <br />
          상세하게 적는다면 보호소는 입양 희망자 분에 대해서 잘 알 수 있을
          거에요. <br />
          추후 보호소와 채팅할 때 설문을 기반으로 대화가 진행될 수 있습니다.
        </a.StepSubTitle>
      </a.StepContainer>
      <a.StepContainer>
        <a.StepImg src="img/img_step_talk.png" />
        <a.StepTitle>입양 상담 (채팅)</a.StepTitle>
        <a.StepSubTitle>
          보호소와 채팅을 통해 상담을 진행합니다. <br />
          입양 설문을 기반으로 대화가 진행됩니다. <br />
          화상통화를 통해 유기견의 모습을 실시간으로 확인해 볼 수 있습니다.
          <br />
          충분한 대화를 통해 입양 결심이 선다면 입양 약속을 잡아보세요. <br />
          입양 약속한 날에는 보호소를 방문해 유기견을 데려옵니다.
        </a.StepSubTitle>
      </a.StepContainer>
      <a.StepContainer>
        <a.StepImg src="img/img_step_heart.png" />
        <a.StepTitle>입양 확정</a.StepTitle>
        <a.StepSubTitle>
          유기견을 집으로 데려온 후 이름을 지어주세요. <br />
          아이의 정보를 입력한 후, <br />
          커뮤니티 기능을 활용해 다양한 정보를 얻을 수 있습니다.
        </a.StepSubTitle>
      </a.StepContainer>
    </a.Container>
  )
}

export default AdoptProgressInfoContainer
