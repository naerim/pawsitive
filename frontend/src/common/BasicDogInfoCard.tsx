import * as b from '@src/common/style/BasicDogInfoCardStyle'

const BasicDogInfoCard = () => {
  return (
    <b.Container>
      <b.AdoptStatus>공고중</b.AdoptStatus>
      <b.Dogimg src="/img/img_dog1.png" />
      <b.DogTextInfoContainer>
        <b.DogName>까미</b.DogName>
        <b.SubInfo>암컷 ∙ 중성화X</b.SubInfo>
        <b.SubInfo>2023(년생) ∙ 믹스</b.SubInfo>
      </b.DogTextInfoContainer>
    </b.Container>
  )
}

export default BasicDogInfoCard
