import { useNavigate } from 'react-router-dom'
import * as m from './_style/MainColorMoveCardStyle'
import { MainColorMoveCardType } from '@/types/common'

const MainColorMoveCard = (props: MainColorMoveCardType) => {
  const { title, subTitle, url } = props

  const navigate = useNavigate()
  const onClick = () => navigate(url)

  return (
    <m.Container onClick={onClick}>
      <div>
        <m.Title>{title}</m.Title>
        <m.SubTitle>{subTitle}</m.SubTitle>
      </div>
      <m.ImageWrap>
        <img alt="arrow" src="/icon/icon_white_arrow_right.png" />
      </m.ImageWrap>
    </m.Container>
  )
}

export default MainColorMoveCard
