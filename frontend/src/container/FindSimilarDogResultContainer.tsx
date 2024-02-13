import { useNavigate } from 'react-router-dom'
import ResultDogTopSection from '@src/components/FindSimilarDogResult/ResultDogTopSection'
import ResultDogInfoSection from '@src/components/FindSimilarDogResult/ResultDogInfoSection'
import ResultDogChartSection from '@src/components/FindSimilarDogResult/ResultDogChartSection'
import ResultDogRecommend from '@src/components/FindSimilarDogResult/ResultDogRecommend'
import * as r from '@src/container/style/FindSimilarDogResultContainerStyle'

const FindSimilarDogResultContainer = () => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/mypage/findSimilarDog')
  }
  return (
    <r.Container>
      <r.Wrap>
        <ResultDogTopSection />
        <ResultDogInfoSection />
        <ResultDogChartSection />
        <ResultDogRecommend />
        <r.ButtonWrap>
          <button type="button" onClick={handleButtonClick}>
            재촬영하기
          </button>
          <button type="button">공유하기</button>
        </r.ButtonWrap>
      </r.Wrap>
    </r.Container>
  )
}

export default FindSimilarDogResultContainer
