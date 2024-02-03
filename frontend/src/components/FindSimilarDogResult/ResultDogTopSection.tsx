import { useLocation } from 'react-router-dom'
import * as r from '@src/components/style/ResultDogTopSectionStyle'

const ResultDogTopSection = () => {
  const location = useLocation()
  const { resultData } = location.state

  const sortedResultData = [...resultData].sort(
    (a, b) => b.probability - a.probability,
  )
  const getDogImage = (label: string) => {
    switch (label) {
      case '말티즈':
        return '/img/img_maltese.png'
      case '비숑':
        return '/img/img_bichon.png'
      case '치와와':
        return '/img/img_chihuahua.png'
      case '푸들':
        return '/img/img_poodle.png'
      case '리트리버':
        return '/img/img_retriever.png'
      default:
        return '/img/img_maltese.png'
    }
  }

  const dogLabel = sortedResultData[0].label
  const dogImageSrc = getDogImage(dogLabel)

  return (
    <r.Container>
      <r.ImageWrap>
        <img src={dogImageSrc} alt="" />
      </r.ImageWrap>
      <r.SubTitle>당신과 닮은 강아지는</r.SubTitle>
      <r.Title>{dogLabel}</r.Title>
    </r.Container>
  )
}

export default ResultDogTopSection
