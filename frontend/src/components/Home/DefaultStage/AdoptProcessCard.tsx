import * as a from '@src/components/Home/_style/AdoptProcessCardStyle'
import { useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'

const AdoptProcessCard = () => {
  const user = useAtomValue(userAtom)
  const navigate = useNavigate()

  const goAdoptProcessInfo = () => navigate('/adopt-process-info')

  return (
    <a.Container onClick={goAdoptProcessInfo} $state={user.role}>
      <a.Title>입양 단계 안내</a.Title>
      <a.ImageWrap>
        <img alt="arrow" src="/icon/icon_white_arrow_right.png" />
      </a.ImageWrap>
    </a.Container>
  )
}

export default AdoptProcessCard
