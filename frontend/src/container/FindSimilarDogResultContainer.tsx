import ResultDogTopSection from '@src/components/FindSimilarDogResult/ResultDogTopSection'
import * as r from '@src/container/style/FindSimilarDogResultContainerStyle'
import ResultDogInfoSection from '@src/components/FindSimilarDogResult/ResultDogInfoSection'
import ResultDogRecommend from '@src/components/FindSimilarDogResult/ResultDogRecommend'

const FindSimilarDogResultContainer = () => {
  return (
    <r.Container>
      <r.Wrap>
        <ResultDogTopSection />
        <ResultDogInfoSection />
        <ResultDogRecommend />
        <r.ButtonWrap>
          <button type="button">재촬영하기</button>
          <button type="button">공유하기</button>
        </r.ButtonWrap>
      </r.Wrap>
    </r.Container>
  )
}

export default FindSimilarDogResultContainer
