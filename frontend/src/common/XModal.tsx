import * as x from '@src/common/style/XModalStyle'
import { ChildrenType } from '@src/types/propsType'
import { CloseFunctionType } from '@src/types/components/ModalType'

const XModal = ({ children, onClose }: ChildrenType & CloseFunctionType) => {
  return (
    <x.Container>
      <x.Wrap>
        <x.CloseButton>
          <img src="/icon/icon_close.png" alt="" onClick={onClose} />
        </x.CloseButton>
        {children}
      </x.Wrap>
    </x.Container>
  )
}

export default XModal
