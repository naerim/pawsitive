import * as c from '@src/common/style/ClosePossibleCardStyle'
import { useAtom } from 'jotai/index'
import { homeRecommendDogShowAtom } from '@src/stores/atoms/visible'
import { ChildrenType } from '@src/types/propsType'

const ClosePossibleCard = ({ children }: ChildrenType) => {
  const [show, setShow] = useAtom(homeRecommendDogShowAtom)
  const closeCard = () => setShow(false)

  return (
    <>
      {show && (
        <c.Container>
          <c.CloseButton onClick={closeCard}>X</c.CloseButton>
          <c.Wrap>{children}</c.Wrap>
        </c.Container>
      )}
    </>
  )
}

export default ClosePossibleCard
