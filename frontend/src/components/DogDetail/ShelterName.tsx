import * as s from '@src/components/DogDetail/style/ShelterNameStyle'
import { useAtom } from 'jotai/index'
import { dogDetailAtom } from '@src/stores/atoms/dog'

const ShelterName = () => {
  const [dogDetail] = useAtom(dogDetailAtom)
  return (
    <s.Container>
      <s.Circle />
      <s.Right>
        <s.Title>{dogDetail.userName}</s.Title>
        <s.Address>{dogDetail.address}</s.Address>
      </s.Right>
    </s.Container>
  )
}

export default ShelterName
