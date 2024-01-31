import AdoptInfo from '@src/components/Home/ThirdStage/AdoptInfo'
import DailyQuestion from '@src/components/Home/ThirdStage/DailyQuestion'
import DogInfo from '@src/components/Home/ThirdStage/DogInfo'

const Index = () => {
  return (
    <>
      <DailyQuestion />
      <div>
        <AdoptInfo />
        <DogInfo />
      </div>
    </>
  )
}

export default Index
