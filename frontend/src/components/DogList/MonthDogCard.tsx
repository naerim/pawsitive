import * as m from '@src/components/DogList/style/MonthDogCardStyle'
import { MonthDogCardType } from '@src/types/dogType'

const MonthDogCard = (props: MonthDogCardType) => {
  const { file, dogNo, name, sex, neutralized, age, kind } = props
  return (
    <m.CardLink to={`/dogs/${dogNo}`} key={dogNo}>
      <m.Container>
        <m.ImgContainer>
          <m.DogImage src={file} alt="강아지 사진" />
        </m.ImgContainer>
        <m.TextInfoContainer>
          <m.DogName>{name}</m.DogName>
          <m.MoreDogInfo>
            {sex === 'm' ? '수컷' : '암컷'}
            <br />
            중성화{neutralized ? 'O' : 'X'}
            <br />
            {age}살
            <br />
            {kind}
          </m.MoreDogInfo>
        </m.TextInfoContainer>
      </m.Container>
    </m.CardLink>
  )
}

export default MonthDogCard
