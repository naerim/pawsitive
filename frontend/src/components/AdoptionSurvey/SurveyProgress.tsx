import * as s from '@src/components/style/SurveyProgressStyle'

const SurveyProgress = (props: { step: number }) => {
  const { step } = props
  return (
    <s.Container>
      <s.Wrap $height={step * 4.7} />
    </s.Container>
  )
}

export default SurveyProgress
