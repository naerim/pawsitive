import * as c from '@src/components/style/CreateDogDoneButtonStyle'
import { ClickType } from '@src/types/propsType.ts'

const CreateDogDoneButton = (props: ClickType) => {
  const { onClick } = props
  return (
    <c.Container>
      <c.Button type="button" onClick={onClick}>
        유기견 등록하기
      </c.Button>
    </c.Container>
  )
}

export default CreateDogDoneButton
