import HomeLayout from '@src/components/Home/HomeLayout'
import DogInfo from '@src/components/Home/ThirdStage/DogInfo'
import PawsitiverCertification from '@src/components/Home/ThirdStage/PawsitiverCertification'
import AdoptInfo from '@src/components/Home/ThirdStage/AdoptInfo'

const Index = () => {
  return (
    <HomeLayout>
      <AdoptInfo />
      <DogInfo />
      <PawsitiverCertification />
    </HomeLayout>
  )
}

export default Index
