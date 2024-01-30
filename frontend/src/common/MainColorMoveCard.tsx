import { MainColorMoveCardType } from '@src/types/commonType'
import * as m from '@src/common/style/MainColorMoveCardStyle'
import { useNavigate } from 'react-router-dom'

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
