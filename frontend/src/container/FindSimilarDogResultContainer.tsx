import ResultDogTopSection from '@src/components/FindSimilarDogResult/ResultDogTopSection'
import * as r from '@src/container/style/FindSimilarDogResultContainerStyle'
import ResultDogInfoSection from '@src/components/FindSimilarDogResult/ResultDogInfoSection'

const FindSimilarDogResultContainer = () => {
  return (
    <r.Container>
      <r.Wrap>
        <ResultDogTopSection />
        <ResultDogInfoSection />
      </r.Wrap>
    </r.Container>
  )
}

export default FindSimilarDogResultContainer
