import Lottie from 'react-lottie'
import mainCommunity from '@assets/lotties/main_community.json'
import MainColorMoveCard from '@common/MainColorMoveCard'
import * as h from '../_style/HomeCommunityCardStyle'

const HomeCommunityCard = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainCommunity,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <h.Container>
      <Lottie options={defaultOptions} height={160} width={160} />
      <h.Wrap>
        <MainColorMoveCard
          title="유기견 입양한 후기 보러가요!"
          subTitle="포지티버의 후기 확인하기"
          url="/community "
        />
      </h.Wrap>
    </h.Container>
  )
}

export default HomeCommunityCard
