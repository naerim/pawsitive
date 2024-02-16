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
          <span>NEW!</span>
          <m.DogInfoWrap>
            <m.DogName>{name}</m.DogName>
            <m.DogInfo>
              {sex === 'm' ? '수컷' : '암컷'} ∙ 중성화{neutralized ? 'O' : 'X'}
            </m.DogInfo>
            <m.DogInfo>
              {kind} ∙ {age}살
            </m.DogInfo>
          </m.DogInfoWrap>
        </m.TextInfoContainer>
      </m.Container>
    </m.CardLink>
  )
}

export default MonthDogCard
