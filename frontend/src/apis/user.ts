import { publicRequest } from '@src/hooks/requestMethods'
import {
  EmailCodeVerifyResponseType,
  EmailCodeVerifyType,
  JoinUserResponseType,
  JoinUserType,
  LoginUserResponseType,
  LoginUserType,
} from '@src/types/userType'
import axios from 'axios'

export const fetchAfterAdoptionUser = async () => {
  return publicRequest.get('users/admin/dogs').then(res => res.data)
}

// 회원가입
export const joinUser = async (
  userData: JoinUserType,
): Promise<JoinUserResponseType> => {
  return publicRequest.post('/auth/join', userData).then(res => res.data)
}

// 인증 메일 요청
export const fetchEmailVerification = async (email: string) => {
  return publicRequest
    .get(`/auth/email/verify?email=${email}`)
    .then(res => res.data)
}

// 인증 코드 검증
export const verifyEmailCode = async (
  emailData: EmailCodeVerifyType,
): Promise<EmailCodeVerifyResponseType> => {
  return publicRequest
    .post('/auth/email/verify', emailData)
    .then(res => res.data)
}

// 로그인 api
export const loginUser = async (
  loginData: LoginUserType,
): Promise<LoginUserResponseType> => {
  return publicRequest
    .post('auth/login', loginData)
    .then(res => {
      const { accessToken, grantType } = res.data
      axios.defaults.headers.common.Authorization = `${grantType} ${accessToken}`
      return res.data
    })
    .catch(error => {
      console.log(error)
      throw new Error('로그인 에러')
    })
}

// const JWT_EXPIRY_TIME = 24 * 3600 * 1000
// export const onLoginSuccess = async (res: AxiosResponse) => {
//   const { accessToken, grantType } = res.data
//   axios.defaults.headers.common.Authorization = `${grantType} ${accessToken}`
//   setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000)
// }
//
// export const loginUser = async (loginData: LoginUserType): Promise<void> => {
//   return publicRequest
//     .post('auth/login', loginData)
//     .then(onLoginSuccess)
//     .catch(error => {
//       console.log(error)
//       throw new Error('로그인 에러')
//     })
// }
//
// export const onSilentRefresh = async () => {
//   return publicRequest
//       .post('/silent-refresh')
//       .then(onLoginSuccess)
//       .catch(error => {
//         console.log(error)
//         throw new Error('리프레시 토큰 연장 에러')
//       })
// }
