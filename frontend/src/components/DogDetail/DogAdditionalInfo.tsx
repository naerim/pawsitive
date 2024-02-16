import * as d from '@src/components/DogDetail/style/DogAdditionalInfoStyle'
import { DogAdditionalInfoType } from '@src/types/components/DogDetailType'

const DogAdditionalInfo = (props: DogAdditionalInfoType) => {
  const { note } = props

  return <d.Container>{note}</d.Container>
}

export default DogAdditionalInfo
