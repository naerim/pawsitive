import * as r from '@src/components/style/ResultDogInfoSectionStyle'

const ResultDogInfoSection = () => {
  return (
    <r.Container>
      <r.Item>
        <div className="left">유사도</div>
        <div className="right">40%</div>
      </r.Item>
      <r.Item>
        <div className="left">다른 강아지</div>
        <div className="right">리트리버, 비숑, 치와와, 말티즈</div>
      </r.Item>
    </r.Container>
  )
}

export default ResultDogInfoSection
