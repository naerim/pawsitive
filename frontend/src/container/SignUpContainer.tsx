import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { joinUser } from '@src/apis/user'
import { JoinUserType } from '@src/types/userType'
import {
  signUpDataAtom,
  signUpErrorAtom,
  signUpPwCheckAtom,
  signUpStepAtom,
} from '@src/stores/atoms/user'
import NameInput from '@src/components/SignUp/NameInput'
import RoleInput from '@src/components/SignUp/RoleInput'
import EmailInput from '@src/components/SignUp/EmailInput'
import PasswordInput from '@src/components/SignUp/PasswordInput'
import PasswordCheckInput from '@src/components/SignUp/PasswordCheckInput'
import BirthGenderInput from '@src/components/SignUp/BirthGenderInput'
import AddressInput from '@src/components/SignUp/AddressInput'
import * as s from '@src/container/style/SignUpContainerStyle'

const SignUpContainer = () => {
  const [signUpData] = useAtom(signUpDataAtom)
  const [pwCheck] = useAtom(signUpPwCheckAtom)
  const [signUpStep, setSignUpStep] = useAtom(signUpStepAtom)
  const [error] = useAtom(signUpErrorAtom)

  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: async (data: JoinUserType) => joinUser(data),
  })

  const handleNextStep = () => {
    setSignUpStep(prevStep => prevStep + 1)
  }

  let isDisabled: boolean = false
  switch (signUpStep) {
    case 1:
      isDisabled = !signUpData.name || !!error.name
      break
    case 2:
      isDisabled = !signUpData.role
      break
    case 3:
      isDisabled = !signUpData.email
      break
    case 4:
      isDisabled = !signUpData.pw
      break
    case 5:
      isDisabled = !pwCheck || !!error.pwCheck
      break
    case 6:
      isDisabled = !signUpData.birth || !signUpData.gender || !!error.birth
      break
    case 7:
      isDisabled = !signUpData.address
      break
    default:
      break
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
        return <PasswordCheckInput />
      case 6:
        return <BirthGenderInput />
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
        {signUpStep < 7 && (
          <s.Button onClick={handleNextStep} disabled={isDisabled}>
            다음
          </s.Button>
        )}
        {signUpStep === 7 && (
          <s.Button onClick={handleSignUp} disabled={isDisabled}>
            회원가입
          </s.Button>
        )}
      </div>
    </s.Container>
  )
}

export default SignUpContainer
