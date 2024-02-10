import * as d from '@src/components/DogDetail/style/DogFileSectionStyle'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { dogDetailAtom } from '@src/stores/atoms/dog'

const DogFileSection = () => {
  const navigate = useNavigate()
  const [dogDetail] = useAtom(dogDetailAtom)
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']
  const videoExtensions = ['mp4', 'avi', 'mkv', 'mov', 'webm']
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
        {dogDetail.files.map(file => {
          // 파일 이름을 추출하기 위해 =='.'으로 분할하고 마지막 요소를 선택
          const fileName = file.split('.').pop()
          return (
            <div key={file}>
              {fileName && (
                <>
                  {imageExtensions.includes(fileName) && (
                    <img
                      src={file}
                      alt={file}
                      style={{ width: '100%', height: '100%' }}
                    />
                  )}
                  {videoExtensions.includes(fileName) && (
                    <video
                      style={{ width: '100%', height: '100%' }}
                      muted
                      autoPlay
                      loop
                    >
                      <source src={file} type={`video/${fileName}`} />
                    </video>
                  )}
                </>
              )}
            </div>
          )
        })}
      </d.StyledSlider>
      <d.SliderBottom>
        <d.Title>{dogDetail.name}</d.Title>
        <d.Desc>
          {dogDetail.sex === 'F' ? '암컷' : '수컷'} ∙ 중성화
          {dogDetail.neutralized ? 'O' : 'X'} ∙ {dogDetail.age}(년생) ∙{' '}
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
