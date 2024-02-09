import * as t from '@src/components/DogDetail/style/TipSectionStyle'

const randomNumber = Math.floor(Math.random() * 10)
const TipSection = () => {
  return (
    <t.Container>
      <t.Card to={`/dictionary/${randomNumber}`}>
        <t.Bold>잠깐!</t.Bold>
        <t.Title>심장사상충이 무엇인가요?</t.Title>
      </t.Card>
      <img src="/icon/icon_orange_arrow_right.png" alt="" />
    </t.Container>
  )
}

export default TipSection
