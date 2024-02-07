import { DictionaryCategoryType } from '@src/types/components/DictionaryType'
import * as c from '@src/components/style/DictionaryCategorySectionStyle'

const DictionaryCategorySection = (props: DictionaryCategoryType) => {
  const { category, setCategory } = props

  return (
    <c.Container>
      <c.Item $select={category === 0} onClick={() => setCategory(0)}>
        <img src="/icon/icon_fire.png" alt="" />
        <span>전체</span>
      </c.Item>
      <c.Item $select={category === 1} onClick={() => setCategory(1)}>
        <img src="/icon/icon_footprint.png" alt="" />
        <span>펫티켓</span>
      </c.Item>
      <c.Item $select={category === 2} onClick={() => setCategory(2)}>
        <img src="/icon/icon_footprint.png" alt="" />
        <span>질병정보</span>
      </c.Item>
      <c.Item $select={category === 3} onClick={() => setCategory(3)}>
        <img src="/icon/icon_food.png" alt="" />
        <span>행동교육</span>
      </c.Item>
      <c.Item $select={category === 4} onClick={() => setCategory(4)}>
        <img src="/icon/icon_cart.png" alt="" />
        <span>애견상식</span>
      </c.Item>
    </c.Container>
  )
}

export default DictionaryCategorySection
