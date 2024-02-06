import { useAtom } from 'jotai'
import { signUpDataAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const RoleInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)

  const handleRoleChange = (roleInput: string) => {
    setSignUpData(prevData => ({ ...prevData, role: roleInput }))
  }

  return (
    <s.InputContainer>
      <s.InputLabel>회원 구분을 선택해주세요.</s.InputLabel>
      <s.ButtonContainer>
        <s.RoleButton
          onClick={() => handleRoleChange('USER')}
          selected={signUpData.role === 'USER'}
        >
          사용자
        </s.RoleButton>
        <s.RoleButton
          onClick={() => handleRoleChange('SHELTER')}
          selected={signUpData.role === 'SHELTER'}
        >
          보호소
        </s.RoleButton>
      </s.ButtonContainer>
    </s.InputContainer>
  )
}

export default RoleInput
