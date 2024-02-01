import AdoptInfo from '@src/components/Home/ThirdStage/AdoptInfo'
import DailyQuestion from '@src/components/Home/ThirdStage/DailyQuestion'
import DogDiary from '@src/components/Home/ThirdStage/DogDiary'
import * as t from '@src/components/style/ThirdStageStyle'

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
