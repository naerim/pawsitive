import * as d from '@src/components/DogDetail/_style/DogFileSectionStyle'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { dogDetailAtom } from '@src/stores/atoms/dog'

const DogFileSection = () => {
  const navigate = useNavigate()
  const [dogDetail] = useAtom(dogDetailAtom)

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

  const goDogList = () => navigate('/dogs')

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
        <d.Title>{dogDetail.name}</d.Title>
        <d.Desc>
          {dogDetail.sex === 'f' ? '수컷' : '암컷'} ∙{' '}
          {dogDetail.neutralized ? 'X' : 'O'} ∙ {dogDetail.age}(년생) ∙{' '}
          {dogDetail.kind}
        </d.Desc>
      </d.SliderBottom>
      <d.EyeWrap>
        <img src="/icon/icon_eye.png" alt="" />
        <span>{dogDetail.hit}</span>
      </d.EyeWrap>
      <d.ArrowWrap onClick={goDogList} role="presentation">
        <img src="/icon/icon_white_arrow_left.png" alt="" />
      </d.ArrowWrap>
    </d.Container>
  )
}

export default DogFileSection
