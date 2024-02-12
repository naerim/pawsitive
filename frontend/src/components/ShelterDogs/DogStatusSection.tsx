import * as c from '@src/components/style/DogStatusSectionStyle'
import { DogStatusSectionType } from '@src/types/dogType'

const DogStatusSection = (props: DogStatusSectionType) => {
  const { statusNumber, setStatusNumber } = props
  return (
    <c.Container>
      <c.Item $select={statusNumber === 0} onClick={() => setStatusNumber(0)}>
        <img src="/icon/icon_footprint.png" alt="" />
        <span>전체</span>
      </c.Item>
      <c.Item $select={statusNumber === 1} onClick={() => setStatusNumber(1)}>
        <img src="/icon/icon_footprint.png" alt="" />
        <span>공고중</span>
      </c.Item>
      <c.Item $select={statusNumber === 2} onClick={() => setStatusNumber(2)}>
        <img src="/icon/icon_footprint.png" alt="" />
        <span>절차진행중</span>
      </c.Item>
      <c.Item $select={statusNumber === 3} onClick={() => setStatusNumber(3)}>
        <img src="/icon/icon_footprint.png" alt="" />
        <span>입양완료</span>
      </c.Item>
    </c.Container>
  )
}

export default DogStatusSection
