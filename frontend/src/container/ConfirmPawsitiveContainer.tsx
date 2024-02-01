import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'
import Lottie from 'react-lottie'
import coolGoldBadge from '@src/assets/lotties/cool_gold_badge.json'
import * as c from '@src/container/style/ConfirmPawsitiveContainerStyle'

const ConfirmPawsitiveContainer = () => {
  const navigate = useNavigate()
  const setUser = useSetAtom(userAtom)

  const goBack = () => navigate(-1)
  const onClick = () => {
    setUser(user => ({ ...user, stage: 1 }))
    navigate(-1)
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
    <c.Container>
      <c.CloseButton type="button" onClick={goBack}>
        X
      </c.CloseButton>
      <Lottie options={defaultOptions} height={200} width={200} />
      <c.Title>포지티버가 되기 위한 체크리스트</c.Title>
      <c.Item>
        <c.SubTitle>책임감 있는 사람이 되기</c.SubTitle>
        <c.Desc>
          반려견을 책임감 있게 돌봐주기 위해 일상적인 돌봄과 의료 관리에 대한
          책임을 갖겠습니다.
        </c.Desc>
      </c.Item>
      <c.Item>
        <c.SubTitle>유기견에 대한 이해와 공부</c.SubTitle>
        <c.Desc>
          입양 전, 유기견에 대한 기본 지식을 쌓아 유기견의 특성, 의료 관리,
          행동에 대한 이해를 높일 것입니다.
        </c.Desc>
      </c.Item>
      <c.Item>
        <c.SubTitle>긴 시간 동안 반려견과 함께할 준비</c.SubTitle>
        <c.Desc>
          반려견에게 충분한 시간과 애정을 주기 위해 긴 시간 동안 반려견과 함께
          할 수 있는 준비를 갖추겠습니다.
        </c.Desc>
      </c.Item>
      <c.OKButton type="button" onClick={onClick}>
        준비됐어요!
      </c.OKButton>
      <c.CancelButton type="button" onClick={goBack}>
        아니요, 조금만 더 둘러볼래요
      </c.CancelButton>
    </c.Container>
  )
}

export default ConfirmPawsitiveContainer
