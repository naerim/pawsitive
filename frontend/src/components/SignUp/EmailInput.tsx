import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { useMutation } from '@tanstack/react-query'
import { signUpDataAtom } from '@src/stores/atoms/user'
import { fetchEmailVerification, verifyEmailCode } from '@src/apis/user'
import { EmailCodeVerifyType } from '@src/types/userType'
import * as s from '@src/components/style/SignUpStyle'

const EmailInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)
  // const [error, setError] = useAtom(signUpErrorAtom)
  const [verificationCode, setVerificationCode] = useState('')
  const [isCodeSent, setIsCodeSent] = useState(false)

  // 인증 메일 요청
  const { mutate: sendCodeMutate } = useMutation({
    mutationFn: async (data: string) => fetchEmailVerification(data),
  })

  // 인증 코드 검증
  const { mutate: verifyCodeMutate } = useMutation({
    mutationFn: async (data: EmailCodeVerifyType) => verifyEmailCode(data),
  })

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value
    setSignUpData(prevData => ({ ...prevData, email: emailInput }))
    setIsCodeSent(false)
  }

  const handleVerificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const verificationCodeInput = e.target.value
    setVerificationCode(verificationCodeInput)
  }

  const handleSendCode = () => {
    setIsCodeSent(true)
    sendCodeMutate(signUpData.email, {
      onSuccess: data => {
        console.log('인증번호 전송 성공:', data)
      },
      onError: err => {
        console.error('인증번호 전송 실패:', err)
      },
    })
  }

  const handleVerifyCode = () => {
    verifyCodeMutate(
      { email: signUpData.email, authCode: verificationCode },
      {
        onSuccess: data => {
          console.log('인증번호 확인 성공:', data)
          // 여기에서 인증이 성공하면 다음 단계로 넘어갈 수 있도록 처리
        },
        onError: err => {
          console.error('인증번호 확인 실패:', err)
        },
      },
    )
  }

  return (
    <s.InputContainer>
      <s.InputLabel htmlFor="email">이메일을 적어주세요.</s.InputLabel>
      <div>
        <div>
          <s.InputField
            type="text"
            id="email"
            name="email"
            value={signUpData.email}
            onChange={handleEmailChange}
            placeholder="이메일"
          />
          <button type="button" onClick={handleSendCode}>
            인증번호 받기
          </button>
        </div>
        {isCodeSent && (
          <div>
            <s.InputField
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              placeholder="인증번호"
            />
            <button type="button" onClick={handleVerifyCode}>
              인증번호 확인하기
            </button>
          </div>
        )}
      </div>
    </s.InputContainer>
  )
}

export default EmailInput
