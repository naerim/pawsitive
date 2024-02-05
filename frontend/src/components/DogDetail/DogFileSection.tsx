import * as d from '@src/components/DogDetail/_style/DogFileSectionStyle'

const DogFileSection = () => {
  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    // eslint-disable-next-line react/no-unstable-nested-components
    appendDots: (dots: string) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: 'dots_custom',
  }

  return (
    <d.Container>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}

      <d.StyledSlider {...settings}>
        <div>
          <img
            src="/img/img_dog_detail1.png"
            alt=""
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div>
          <video style={{ width: '100%', height: '100%' }} muted autoPlay loop>
            <source src="/video/video_dog1.mp4" type="video/mp4" />
          </video>
        </div>
      </d.StyledSlider>
      <d.SliderBottom>
        <d.Title>단풍이</d.Title>
        <d.Desc>암컷 ∙ 중성화X ∙ 2023(년생) ∙ 믹스</d.Desc>
      </d.SliderBottom>
      <d.EyeWrap>
        <img src="/icon/icon_eye.png" alt="" />
        <span>22</span>
      </d.EyeWrap>
      <d.ArrowWrap>
        <img src="/icon/icon_white_arrow_left.png" alt="" />
      </d.ArrowWrap>
    </d.Container>
  )
}

export default DogFileSection
