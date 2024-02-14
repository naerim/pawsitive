import * as d from '@src/components/DogDetail/style/DogFileSectionStyle'
import { useNavigate } from 'react-router-dom'
import { DogFileSectionType } from '@src/types/components/DogDetailType'

const DogFileSection = (props: DogFileSectionType) => {
  const { files, name, sex, neutralized, kind, hit, age } = props
  const navigate = useNavigate()
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
        {files.map(file => {
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
                      style={{
                        width: '100%',
                        height: '500px',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  {videoExtensions.includes(fileName) && (
                    <video
                      style={{
                        width: '100%',
                        height: '500px',
                        objectFit: 'cover',
                      }}
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
        <d.Title>{name}</d.Title>
        <d.Desc>
          {sex === 'F' ? '암컷' : '수컷'} ∙ 중성화
          {neutralized ? 'O' : 'X'} ∙ {age}살 ∙ {kind}
        </d.Desc>
      </d.SliderBottom>
      <d.EyeWrap>
        <img src="/icon/icon_eye.png" alt="" />
        <span>{hit}</span>
      </d.EyeWrap>
      <d.ArrowWrap onClick={goDogList} role="presentation">
        <img src="/icon/icon_white_arrow_left.png" alt="" />
      </d.ArrowWrap>
    </d.Container>
  )
}

export default DogFileSection
