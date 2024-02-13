import * as m from '@src/components/DogList/style/MonthDogCardStyle'
import { MonthDogCardType } from '@src/types/dogType'

const MonthDogCard = (props: MonthDogCardType) => {
  const { file, name, sex, neutralized, age, kind } = props
  return (
    <m.Container>
      <m.ImgContainer>
        <m.DogImage src={file} alt="강아지 사진" />
      </m.ImgContainer>
      <m.TextInfoContainer>
        <m.DogName>{name}</m.DogName>
        <m.MoreDogInfo>
          {sex}
          <br />
          중성화{neutralized ? 'O' : 'X'}
          <br />
          {age}살
          <br />
          {kind}
        </m.MoreDogInfo>
      </m.TextInfoContainer>
    </m.Container>
  )
}

export default MonthDogCard
