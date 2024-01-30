import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'

const ConfirmPawsitiveContainer = () => {
  const navigate = useNavigate()
  const setUser = useSetAtom(userAtom)

  const goBack = () => navigate(-1)
  const onClick = () => {
    setUser(user => ({ ...user, stage: 1 }))
    goBack()
  }

  return (
    <div>
      <div>입양 마음 확정 페이지</div>
      <br />
      <br />
      <button type="button" onClick={onClick}>
        네
      </button>
      <br />
      <button type="button" onClick={goBack}>
        아니요, 조금만 더 둘러볼래요
      </button>
      <br />
      <br />
      <button type="button" onClick={goBack}>
        뒤로가기
      </button>
    </div>
  )
}

export default ConfirmPawsitiveContainer
