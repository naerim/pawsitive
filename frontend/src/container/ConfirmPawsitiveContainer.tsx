import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import Lottie from 'react-lottie'
import coolGoldBadge from '@src/assets/lotties/cool_gold_badge.json'

const ConfirmPawsitiveContainer = () => {
  const navigate = useNavigate()
  const setUser = useSetAtom(userAtom)

  const goBack = () => navigate(-1)
  const onClick = () => {
    setUser(user => ({ ...user, stage: 1 }))
    goBack()
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coolGoldBadge,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <div>입양 마음 확정 페이지</div>
      <Lottie options={defaultOptions} height={200} width={200} />
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
