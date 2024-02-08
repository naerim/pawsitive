import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { useMutation } from '@tanstack/react-query'
import { signUpDataAtom, signUpErrorAtom } from '@src/stores/atoms/user'
import { fetchEmailVerification, verifyEmailCode } from '@src/apis/user'
import { EmailCodeVerifyType } from '@src/types/userType'
import * as s from '@src/components/style/SignUpStyle'

const EmailInput = () => {
  const [signUpData, setSignUpData] = useAtom(signUpDataAtom)
  const [error, setError] = useAtom(signUpErrorAtom)
  const [verificationCode, setVerificationCode] = useState('')
  const [isCodeSent, setIsCodeSent] = useState(false)

  let title: string = '이메일을 적어주세요'
  if (isCodeSent) {
    title = '이메일을 확인해주세요'
  }
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
    if (signUpData.email) {
      setIsCodeSent(true)
      sendCodeMutate(signUpData.email, {
        onSuccess: data => {
          console.log('인증번호 전송 성공:', data)
          setError(prevError => ({
            ...prevError,
            email: '인증번호를 전송하였습니다',
          }))
        },
        onError: err => {
          console.error('인증번호 전송 실패:', err)
          setError(prevError => ({
            ...prevError,
            email: '이메일이 유효하지 않습니다.',
          }))
        },
      })
    } else {
      setError(prevError => ({
        ...prevError,
        email: '이메일을 입력하세요',
      }))
    }
  }

  const handleVerifyCode = () => {
    if (verificationCode) {
      verifyCodeMutate(
        { email: signUpData.email, authCode: verificationCode },
        {
          onSuccess: data => {
            console.log('인증번호 확인 성공:', data)
            if (data.result) {
              setError(prevError => ({
                ...prevError,
                email: '',
              }))
              setError(prevError => ({
                ...prevError,
                emailVerify: '',
              }))
            } else {
              setError(prevError => ({
                ...prevError,
                emailVerify: '인증번호가 올바르지 않습니다',
              }))
            }
          },
        },
      )
    } else {
      setError(prevError => ({
        ...prevError,
        emailVerify: '인증번호를 입력해주세요',
      }))
    }
  }

  return (
    <s.Container>
      <s.TitleContainer>
        <s.Title>{title}</s.Title>
      </s.TitleContainer>
      <s.TwoInputContainer>
        <s.InputContainer>
          <s.Input
            type="text"
            id="email"
            name="email"
            value={signUpData.email}
            onChange={handleEmailChange}
            placeholder="이메일"
          />
          <s.CheckButton type="button" onClick={handleSendCode}>
            인증번호 전송
          </s.CheckButton>
        </s.InputContainer>
        <s.ErrorText>{error.email}</s.ErrorText>
        <s.InputContainer>
          <s.Input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={verificationCode}
            onChange={handleVerificationCodeChange}
            placeholder="인증번호 6자리를 입력하세요"
          />
          <s.CheckButton type="button" onClick={handleVerifyCode}>
            인증번호 확인
          </s.CheckButton>
        </s.InputContainer>
        <s.ErrorText>{error.emailVerify}</s.ErrorText>
      </s.TwoInputContainer>
    </s.Container>
  )
}

export default EmailInput
