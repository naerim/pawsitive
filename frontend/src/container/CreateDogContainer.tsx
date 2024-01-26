import CreateDogFile from '@src/components/CreateDog/CreateDogFile'
import CreateDogInfo from '@src/components/CreateDog/CreateDogInfo'
import CreateDogMbti from '@src/components/CreateDog/CreateDogMbti'
import CreateDogDoneButton from '@src/components/CreateDog/CreateDogDoneButton'

const CreateDogContainer = () => {
  return (
    <div>
      <h1>보호소의 유기견 추가 페이지</h1>
      <CreateDogInfo />
      <CreateDogMbti />
      <CreateDogFile />
      <CreateDogDoneButton />
    </div>
  )
}

export default CreateDogContainer
