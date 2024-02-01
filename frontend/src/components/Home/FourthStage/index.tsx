import AdoptInfo from '@src/components/Home/FourthStage/AdoptInfo'
import DailyQuestion from '@src/components/Home/FourthStage/DailyQuestion'
import DogDiary from '@src/components/Home/FourthStage/DogDiary'
import * as t from '@src/components/style/FourthStageStyle.tsx'

const Index = () => {
  return (
    <>
      <t.CenterContainer>
        <AdoptInfo />
        <DogDiary />
      </t.CenterContainer>
      <DailyQuestion />
    </>
  )
}

export default Index
