import { useNavigate } from 'react-router-dom'
import * as m from './style/LightColorMoveCardStyle'
import { LightColorMoveCardType } from '@/types/common'

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
