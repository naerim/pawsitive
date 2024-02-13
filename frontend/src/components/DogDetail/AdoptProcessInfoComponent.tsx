import * as a from '@src/components/DogDetail/style/AdoptProcessInfoComponentStyle'

const AdoptProcessInfoComponent = () => {
  return (
    <a.Container>
      <a.Title>입양 절차</a.Title>
      <a.AllStepContainer>
        <a.StepContainer>
          <a.StepImg style={{ width: '75%' }} src="/img/img_step_speaker.png" />
          <a.StepTitle>공고확인</a.StepTitle>
        </a.StepContainer>

        <a.ChevronDownImg src="/icon/icon_orange_arrow_right.png" />

        <a.StepContainer>
          <a.StepImg style={{ width: '60%' }} src="/img/img_step_survey.png" />
          <a.StepTitle>입양 설문</a.StepTitle>
        </a.StepContainer>

        <a.ChevronDownImg src="/icon/icon_orange_arrow_right.png" />

        <a.StepContainer>
          <a.StepImg src="/img/img_step_talk.png" />
          <a.StepTitle>입양 상담 (채팅)</a.StepTitle>
        </a.StepContainer>

        <a.ChevronDownImg src="/icon/icon_orange_arrow_right.png" />

        <a.StepContainer>
          <a.StepImgContainer>
            <a.StepImg
              style={{ width: '70%', paddingTop: '10px' }}
              src="/img/img_step_heart.png"
            />
          </a.StepImgContainer>
          <a.StepTitle>입양 확정</a.StepTitle>
        </a.StepContainer>
      </a.AllStepContainer>
    </a.Container>
  )
}

export default AdoptProcessInfoComponent
