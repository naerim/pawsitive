import * as h from '@src/components/style/HomeLayoutStyle'
import { ChildrenType } from '@src/types/propsType'

const HomeLayout = ({ children }: ChildrenType) => {
  return (
    <div>
      <h.Container>
        <div>
          <h.Title>PAWSITIVE</h.Title>
          <h.SubTitle>
            오늘도 귀여운 반려견들이
            <br /> 당신을 기다리고 있어요
          </h.SubTitle>
        </div>
        <h.HomeImage src="/img/img_main_house.png" alt="" />
      </h.Container>
      <h.Wrap>{children}</h.Wrap>
    </div>
  )
}

export default HomeLayout
