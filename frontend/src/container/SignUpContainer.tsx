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
import IdInput from '@src/components/SignUp/IdInput'
import PasswordInput from '@src/components/SignUp/PasswordInput'
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

  const handlePrevStep = () => {
    if (signUpStep === 1) {
      navigate(`/login`)
    } else {
      setSignUpStep(prevStep => prevStep - 1)
    }
  }

  const handleNextStep = () => {
    setSignUpStep(prevStep => prevStep + 1)
  }

  let isDisabled: boolean = false
  switch (signUpStep) {
    case 1:
      isDisabled = !signUpData.role
      break
    case 2:
      isDisabled = !signUpData.name || !!error.name
      break
    case 3:
      isDisabled = !signUpData.birth || !signUpData.gender || !!error.dob
      break
    case 4:
      // isDisabled = !signUpData.email
      isDisabled = !signUpData.email || !!error.email || !!error.emailVerify
      break
    case 5:
      isDisabled = !signUpData.pw || !pwCheck || !!error.pwCheck
      break
    case 6:
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
      onError: err => {
        console.error('회원가입 실패:', err)
      },
    })
  }

  const renderStepComponent = () => {
    switch (signUpStep) {
      case 1:
        return <RoleInput />
      case 2:
        return <NameInput />
      case 3:
        return <BirthGenderInput />
      case 4:
        if (signUpData.role === 'SHELTER') {
          return <IdInput />
        }
        return <EmailInput />
      case 5:
        return <PasswordInput />
      case 6:
        return <AddressInput />
      default:
        return null
    }
  }

  return (
    <s.Container>
      <s.BackButtonContainer>
        <button type="button" onClick={handlePrevStep}>
          &lt;
        </button>
      </s.BackButtonContainer>
      <s.InputContainer>
        {renderStepComponent()}
        <s.ButtonContainer>
          {signUpStep < 6 && (
            <s.Button onClick={handleNextStep} disabled={isDisabled}>
              다음
            </s.Button>
          )}
          {signUpStep === 6 && (
            <s.Button onClick={handleSignUp} disabled={isDisabled}>
              회원가입
            </s.Button>
          )}
        </s.ButtonContainer>
      </s.InputContainer>
    </s.Container>
  )
}

export default SignUpContainer
