import { LightColorMoveCardType } from '@src/types/commonType'
import * as m from '@src/common/style/LightColorMoveCardStyle'
import { useNavigate } from 'react-router-dom'

const LightColorMoveCard = (props: LightColorMoveCardType) => {
  const { title, url } = props

  const navigate = useNavigate()
  const onClick = () => navigate(url)

  return (
    <m.Container onClick={onClick}>
      <m.Title>{title}</m.Title>
    </m.Container>
  )
}

export default LightColorMoveCard
