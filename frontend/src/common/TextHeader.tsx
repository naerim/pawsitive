import * as c from '@src/common/style/TextHeaderStyle'
import { useAtom } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'
import { useNavigate } from 'react-router-dom'

const TextHeader = (props: { title: string }) => {
  const { title } = props
  const [user] = useAtom(userAtom)
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/new/dog')
  }

  return (
    <c.Container>
      <c.Wrap>
        {title}
        {user.role === 'SHELTER' && title === '유기견 공고' && (
          <c.PlusButton onClick={handleButtonClick}>+ 등록</c.PlusButton>
        )}
      </c.Wrap>
    </c.Container>
  )
}

export default TextHeader
