import * as a from '@src/components/Home/_style/AdoptProcessCardStyle'
import { useNavigate } from 'react-router-dom'

const AdoptProcessCard = () => {
  const navigate = useNavigate()

  const goAdoptProcessInfo = () => navigate('/adopt-process-info')

  return (
    <a.Container onClick={goAdoptProcessInfo}>
      <a.Title>입양 단계 안내</a.Title>
      <a.ImageWrap>
        <img alt="arrow" src="/icon/icon_white_arrow_right.png" />
      </a.ImageWrap>
    </a.Container>
  )
}

export default AdoptProcessCard
