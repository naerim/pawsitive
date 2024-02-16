import * as d from '@src/components/style/DogDiaryStyle'

const DogDiary = () => {
  return (
    <d.Container>
      <d.LinkDiv to="/questions">
        <d.BoneBowl src="img/img_bone_bowl.png" alt="BoneBowl" />
        <d.TitleContainer>
          <d.SubTitle>답변 기록 모아보기</d.SubTitle>
          <d.Title>PAW - LOG</d.Title>
        </d.TitleContainer>
      </d.LinkDiv>
    </d.Container>
  )
}

export default DogDiary
