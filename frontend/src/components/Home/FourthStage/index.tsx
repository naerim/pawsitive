import AdoptInfo from '@src/components/Home/FourthStage/AdoptInfo'
import DailyQuestion from '@src/components/Home/FourthStage/DailyQuestion'
import DogDiary from '@src/components/Home/FourthStage/DogDiary'
import * as t from '@src/components/style/FourthStageIndexStyle'

const Index = () => {
  return (
    <>
      <DailyQuestion />
      <t.CenterContainer>
        <AdoptInfo />
        <DogDiary />
      </t.CenterContainer>
    </>
  )
}

export default Index
