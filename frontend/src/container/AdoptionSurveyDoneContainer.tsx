import * as a from '@src/container/style/AdoptionSurveyDoneStyle'
import Lottie from 'react-lottie'
import clap from '@src/assets/lotties/clap.json'
import { useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'

const AdoptionSurveyDoneContainer = () => {
  const navigate = useNavigate()
  const goMain = () => navigate('/')
  const user = useAtomValue(userAtom)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: clap,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <a.Container>
      <a.Wrap>
        <Lottie options={defaultOptions} height={340} width={340} />
        <a.SubTitle>입양설문 작성 완료!</a.SubTitle>
        <a.Title>
          축하해요 {user.name}님, <br />
          포지티버에 한걸음 더 다가가셨네요
        </a.Title>
        <a.DoneButton>
          <button type="button" onClick={goMain}>
            확인
          </button>
        </a.DoneButton>
      </a.Wrap>
    </a.Container>
  )
}

export default AdoptionSurveyDoneContainer
