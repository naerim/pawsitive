import * as m from '@src/components/DogList/style/MonthDogCardStyle'

const MonthDogCard = () => {
  return (
    <m.Container>
      <m.ImgContainer>
        <m.DogImage src="img/img_dog1.png" alt="강아지 사진" />
      </m.ImgContainer>
      <m.TextInfoContainer>
        <m.DogName>까미</m.DogName>
        <m.MoreDogInfo>
          암컷
          <br />
          중성화x
          <br />
          2023년생
          <br />
          포메라니안
        </m.MoreDogInfo>
      </m.TextInfoContainer>
    </m.Container>
  )
}

export default MonthDogCard
