import * as c from '@src/components/style/CreateDogDoneButtonStyle'
import { FormClickType } from '@src/types/propsType.ts'

const CreateDogDoneButton = (props: FormClickType) => {
  const { onClick } = props

  return (
    <c.Container>
      <c.Button type="submit" onClick={() => onClick}>
        유기견 등록하기
      </c.Button>
    </c.Container>
  )
}

export default CreateDogDoneButton
