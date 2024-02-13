import Lottie from 'react-lottie'
import mainCommunity from '@src/assets/lotties/main_community.json'
import * as h from '@src/components/style/HomeCommunityCardStyle'
import MainColorMoveCard from '@src/common/MainColorMoveCard.tsx'

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
          url="/community/map "
        />
      </h.Wrap>
    </h.Container>
  )
}

export default HomeCommunityCard
