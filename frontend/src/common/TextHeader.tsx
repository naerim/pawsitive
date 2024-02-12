import * as c from '@src/common/style/TextHeaderStyle'
import { ChattingListHeaderPropsType } from '@src/types/chatType'

const TextHeader: React.FC<ChattingListHeaderPropsType> = ({ title }) => {
  return (
    <c.Container>
      <c.Wrap>{title}</c.Wrap>
    </c.Container>
  )
}

export default TextHeader
