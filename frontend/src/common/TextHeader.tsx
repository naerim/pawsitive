import { useAtom } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { useNavigate } from 'react-router-dom'
import * as c from '@src/common/style/TextHeaderStyle'

const TextHeader = (props: { title: string }) => {
  const { title } = props
  const [user] = useAtom(userAtom)
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/new/dog')
  }

  const handlePrevStep = () => {
    navigate('/')
  }

  return (
    <c.Container>
      {user.role === 'SHELTER' && title === '유기견 공고' ? (
        <c.Wrap>
          {title}
          <c.PlusButton onClick={handleButtonClick}>+ 등록</c.PlusButton>
        </c.Wrap>
      ) : (
        <c.Wrap>
          <c.BackButtonWrap onClick={handlePrevStep}>
            <img src="/icon/icon_gray_arrow_left.png" alt="" />
          </c.BackButtonWrap>
          <c.Title>{title}</c.Title>
          <c.Span />
        </c.Wrap>
      )}
    </c.Container>
  )
}

export default TextHeader
