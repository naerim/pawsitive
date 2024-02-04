import React from 'react'
import { useAtom } from 'jotai'
import { signUpDataAtom } from '@src/stores/atoms/user'
import * as s from '@src/components/style/SignUpStyle'

const RoleInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const roleInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, role: roleInput }))
  }

  return (
    <s.InputContainer>
      <s.InputLabel>어떤 회원이신가요?</s.InputLabel>
      <s.InputLabel>
        <input
          type="radio"
          name="role"
          value="USER"
          checked={signUpData.role === 'USER'}
          onChange={handleRoleChange}
        />
        사용자
      </s.InputLabel>
      <s.InputLabel>
        <input
          type="radio"
          name="role"
          value="SHELTER"
          checked={signUpData.role === 'SHELTER'}
          onChange={handleRoleChange}
        />
        보호소
      </s.InputLabel>
    </s.InputContainer>
  )
}

export default RoleInput
