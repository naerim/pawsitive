import SaveDogListSection from '@src/components/SaveDog/SaveDogListSection'
import * as s from '@src/container/style/SaveDogListContainerStyle'

const SaveDogsListContainer = () => {
  return (
    <s.Container>
      <div>관심공고페이지</div>
      <SaveDogListSection />
    </s.Container>
  )
}

export default SaveDogsListContainer
