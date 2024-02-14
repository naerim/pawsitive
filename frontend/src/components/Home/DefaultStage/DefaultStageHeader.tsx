import * as d from '@src/components/Home/_style/DefaultStageHeaderStyle'

const DefaultStageHeader = () => {
  return (
    <d.Container>
      <d.TopWrap>
        <div>
          <d.Title>PAWSITIVE</d.Title>
          <d.SubTitle>
            오늘도 귀여운 반려견들이
            <br /> 당신을 기다리고 있어요
          </d.SubTitle>
        </div>
        <d.HomeImage src="/img/img_main_house.png" alt="" />
      </d.TopWrap>
    </d.Container>
  )
}

export default DefaultStageHeader
