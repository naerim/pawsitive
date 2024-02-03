import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { joinUser } from '@src/apis/user'
import { JoinUserType } from '@src/types/userType'
import { signUpDataAtom, signUpStepAtom } from '@src/stores/atoms/user'
import NameInput from '@src/components/SignUp/NameInput'
import RoleInput from '@src/components/SignUp/RoleInput'
import EmailInput from '@src/components/SignUp/EmailInput'
import PasswordInput from '@src/components/SignUp/PasswordInput'
import BirthInput from '@src/components/SignUp/BirthInput'
import GenderInput from '@src/components/SignUp/GenderInput'
import AddressInput from '@src/components/SignUp/AddressInput'
import * as s from '@src/container/style/SignUpContainerStyle'

const SignUpContainer = () => {
  const [signUpData] = useAtom(signUpDataAtom)
  const [signUpStep, setSignUpStep] = useAtom(signUpStepAtom)

  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: async (data: JoinUserType) => joinUser(data),
  })

  const handleNextStep = () => {
    setSignUpStep(prevStep => prevStep + 1)
  }

  const handleSignUp = () => {
    mutate(signUpData, {
      onSuccess: data => {
        console.log('회원가입 성공:', data)
        navigate('/login')
      },
      onError: error => {
        console.error('회원가입 실패:', error)
      },
    })
  }

  const renderStepComponent = () => {
    switch (signUpStep) {
      case 1:
        return <NameInput />
      case 2:
        return <RoleInput />
      case 3:
        return <EmailInput />
      case 4:
        return <PasswordInput />
      case 5:
        return <BirthInput />
      case 6:
        return <GenderInput />
      case 7:
        return <AddressInput />
      default:
        return null
    }
  }

  return (
    <s.Container>
      {renderStepComponent()}
      <div>
        {signUpStep < 7 && <s.Button onClick={handleNextStep}>다음</s.Button>}
        {signUpStep === 7 && (
          <s.Button onClick={handleSignUp}>회원가입</s.Button>
        )}
      </div>
    </s.Container>
  )
}

export default SignUpContainer
