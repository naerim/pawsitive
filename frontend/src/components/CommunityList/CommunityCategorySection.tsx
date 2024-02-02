import * as c from '@src/components/style/CommunityCategorySectionStyle'

const CommunityCategorySection = () => {
  return (
    <c.Container>
      <c.Item>
        <img src="/icon/icon_fire.png" alt="" />
        <span>인기글</span>
      </c.Item>
      <c.Item>
        <img src="/icon/icon_cart.png" alt="" />
        <span>쇼핑하개</span>
      </c.Item>
      <c.Item>
        <img src="/icon/icon_food.png" alt="" />
        <span>밥주개</span>
      </c.Item>
      <c.Item>
        <img src="/icon/icon_hospital.png" alt="" />
        <span>건강하개</span>
      </c.Item>
    </c.Container>
  )
}

export default CommunityCategorySection
