import * as c from '@src/components/style/CommunityCategorySectionStyle'
import { CommunityCategoryAtom } from '@src/stores/atoms/community'
import { useAtom } from 'jotai'

const CommunityCategorySection = () => {
  const [CommunityCategoryValue, setCommunityCategory] = useAtom(
    CommunityCategoryAtom,
  )

  const onClickItem = (id: number) => {
    setCommunityCategory(id)
  }

  return (
    <c.Container>
      <c.Item
        isSelected={CommunityCategoryValue === 0}
        onClick={() => onClickItem(0)}
      >
        <img src="/icon/icon_fire.png" alt="" />
        <span>모두보개</span>
      </c.Item>
      <c.Item
        isSelected={CommunityCategoryValue === 1}
        onClick={() => onClickItem(1)}
      >
        <img src="/icon/icon_footprint.png" alt="" />
        <span>지식쌓개</span>
      </c.Item>
      <c.Item
        isSelected={CommunityCategoryValue === 2}
        onClick={() => onClickItem(2)}
      >
        <img src="/icon/icon_footprint.png" alt="" />
        <span>자랑하개</span>
      </c.Item>
      <c.Item
        isSelected={CommunityCategoryValue === 3}
        onClick={() => onClickItem(3)}
      >
        <img src="/icon/icon_food.png" alt="" />
        <span>영양있개</span>
      </c.Item>
      <c.Item
        isSelected={CommunityCategoryValue === 4}
        onClick={() => onClickItem(4)}
      >
        <img src="/icon/icon_cart.png" alt="" />
        <span>쇼핑하개</span>
      </c.Item>
    </c.Container>
  )
}

export default CommunityCategorySection
