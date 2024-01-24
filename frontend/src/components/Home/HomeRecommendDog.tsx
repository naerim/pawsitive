import * as h from '@src/components/style/HomeRecommendDogStyle'
import ClosePossibleCard from '@src/common/ClosePossibleCard.tsx'
import { VisibleType } from '@src/types/propsType'

const HomeRecommendDog = (props: VisibleType) => {
  const { show, setShow } = props

  return (
    <h.Container>
      <ClosePossibleCard show={show} setShow={setShow}>
        dd
      </ClosePossibleCard>
      <div>유기견 추천 컴포넌트</div>
    </h.Container>
  )
}

export default HomeRecommendDog
