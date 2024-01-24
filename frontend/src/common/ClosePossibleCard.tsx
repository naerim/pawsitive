import * as c from '@src/common/style/ClosePossibleCardStyle'
import { ClosePossibleCardType } from '@src/types/components/HomeType.ts'

const ClosePossibleCard = ({
  show,
  setShow,
  children,
}: ClosePossibleCardType) => {
  const closeCard = () => setShow(false)

  return (
    <>
      {show && (
        <c.Container>
          <c.CloseButton onClick={closeCard}>X</c.CloseButton>
          <div>{children}</div>
        </c.Container>
      )}
    </>
  )
}

export default ClosePossibleCard
