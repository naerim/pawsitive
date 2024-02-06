import * as c from '@src/components/style/CommunityCategorySectionStyle'
import { CommunityCategoryType } from '@src/types/communityType'

const CommunityCategorySection = (props: CommunityCategoryType) => {
  const { category, setCategory } = props
  return (
    <c.Container>
      <c.Item $select={category === 0} onClick={() => setCategory(0)}>
        <img src="/icon/icon_fire.png" alt="" />
        <span>모두보개</span>
      </c.Item>
      <c.Item $select={category === 1} onClick={() => setCategory(1)}>
        <img src="/icon/icon_footprint.png" alt="" />
        <span>지식쌓개</span>
      </c.Item>
      <c.Item $select={category === 2} onClick={() => setCategory(2)}>
        <img src="/icon/icon_footprint.png" alt="" />
        <span>자랑하개</span>
      </c.Item>
      <c.Item $select={category === 3} onClick={() => setCategory(3)}>
        <img src="/icon/icon_food.png" alt="" />
        <span>영양있개</span>
      </c.Item>
      <c.Item $select={category === 4} onClick={() => setCategory(4)}>
        <img src="/icon/icon_cart.png" alt="" />
        <span>쇼핑하개</span>
      </c.Item>
    </c.Container>
  )
}

export default CommunityCategorySection
