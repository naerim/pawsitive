import * as d from '@src/components/DogDetail/style/DogAdditionalInfoStyle'
import { useAtom } from 'jotai/index'
import { dogDetailAtom } from '@src/stores/atoms/dog'

const DogAdditionalInfo = () => {
  const [dogDetail] = useAtom(dogDetailAtom)

  return <d.Container>{dogDetail.note}</d.Container>
}

export default DogAdditionalInfo
