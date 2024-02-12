import * as x from '@src/common/style/XModalStyle'
import { ChildrenType } from '@src/types/propsType'

const XModal = ({ children }: ChildrenType) => {
  return (
    <x.Container>
      <x.Wrap>
        <x.CloseButton>
          <img src="/icon/icon_close.png" alt="" />
        </x.CloseButton>
        {children}
      </x.Wrap>
    </x.Container>
  )
}

export default XModal
