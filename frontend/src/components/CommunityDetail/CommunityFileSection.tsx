import * as d from '@src/components/CommunityDetail/_style/CommunityFileSection'
import { useNavigate } from 'react-router-dom'

interface PropsType {
  images: string[]
  title: string
  category: string
  hit: number
}

const CommunityFileSection = (props: PropsType) => {
  const { images, title, category, hit } = props
  const navigate = useNavigate()

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

  const goCommunityList = () => navigate('/community')

  return (
    <d.Container>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}

      <d.StyledSlider {...settings}>
        {images.map(img => (
          <div key={img}>
            <img
              src={img}
              alt={img}
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </d.StyledSlider>
      <d.SliderBottom>
        <d.Title>{title}</d.Title>
        <d.Desc>{category}</d.Desc>
      </d.SliderBottom>
      <d.EyeWrap>
        <img src="/icon/icon_eye.png" alt="" />
        <span>{hit}</span>
      </d.EyeWrap>
      <d.ArrowWrap onClick={goCommunityList} role="presentation">
        <img src="/icon/icon_white_arrow_left.png" alt="" />
      </d.ArrowWrap>
    </d.Container>
  )
}

export default CommunityFileSection
