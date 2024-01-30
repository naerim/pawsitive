import * as c from '@src/common/style/CustomCardStyle'
import { ChildrenType } from '@src/types/propsType'

const CustomCard = ({ children }: ChildrenType) => {
  return <c.Container>{children}</c.Container>
}

export default CustomCard
