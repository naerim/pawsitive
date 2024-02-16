import * as r from '@src/components/style/ResultDogInfoSectionStyle'
import { useLocation } from 'react-router-dom'

const ResultDogInfoSection = () => {
  const location = useLocation()
  const { resultData } = location.state
  const sortedResultData = [...resultData].sort(
    (a, b) => b.probability - a.probability,
  )
  const dogProbability = sortedResultData[0].probability
  const otherDogLabels = sortedResultData
    .slice(1)
    .map(data => data.label)
    .join(', ')

  return (
    <r.Container>
      <r.Item>
        <div className="left">유사도</div>
        <div className="right">{dogProbability}%</div>
      </r.Item>
      <r.Item>
        <div className="left">다른 강아지</div>
        <div className="right">{otherDogLabels}</div>
      </r.Item>
    </r.Container>
  )
}

export default ResultDogInfoSection
