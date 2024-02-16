import * as t from '@src/components/DogDetail/style/TipSectionStyle'

const TipSection = (props: { contentNo: number; contentTitle: string }) => {
  const { contentNo, contentTitle } = props

  return (
    <t.Container to={`/dictionary/${contentNo}`}>
      <t.Card>
        <t.Bold>잠깐!</t.Bold>
        <t.Title>{contentTitle}에 대해 알아봐요!</t.Title>
      </t.Card>
      <img src="/icon/icon_orange_arrow_right.png" alt="" />
    </t.Container>
  )
}

export default TipSection
