import { publicRequest } from '@src/hooks/requestMethods'
import {
  EmailCodeVerifyType,
  JoinUserType,
  JwtTokenType,
  LoginUserType,
  UpdateUserStageReqType,
  UserInformationType,
} from '@src/types/userType'
import { onSilentRefresh } from '@src/apis/silentRefresh'

export const fetchAfterAdoptionUser = async () => {
  return publicRequest.get('users/admin/dogs').then(res => res.data)
}

// 회원가입
export const joinUser = async (userData: JoinUserType) => {
  return publicRequest.post('/auth/join', userData).then(res => res.data)
}

// 인증 메일 요청
export const fetchEmailVerification = async (email: string) => {
  return publicRequest
    .get(`/auth/email/verify?email=${email}`)
    .then(res => res.data)
}

// 인증 코드 검증
export const verifyEmailCode = async (emailData: EmailCodeVerifyType) => {
  return publicRequest
    .post('/auth/email/verify', emailData)
    .then(res => res.data)
}

// 로그인 유저 정보 저장하는 api
export const loginData = async (loginDatas: LoginUserType) => {
  return publicRequest
    .post('auth/login', loginDatas)
    .then(res => {
      // const setUserEmail = useSetAtom(userEmail)
      // setUserEmail(res.data.email)
      return res.data
    })
    .catch(error => {
      console.log(error)
      throw new Error('로그인 에러')
    })
}

// const JWT_EXPIRY_TIME = 24 * 3600 * 1000
// 5분에 한 번 저장
const JWT_EXPIRY_TIME = 3600 * 1000

export const onLoginSuccess = async (res: JwtTokenType) => {
  const storage = localStorage.getItem('currentUser')
  if (storage) {
    const currentUser = JSON.parse(storage)
    const userEmail = currentUser.email
    publicRequest.defaults.headers.common.Authorization = `${res.grantType} ${res.accessToken}`
    document.cookie = `refreshToken = ${res.refreshToken}`

    setTimeout(
      () =>
        onSilentRefresh({
          postData: {
            email: userEmail,
            refreshToken: res.refreshToken,
          },
          grantType: res.grantType,
          accessToken: res.accessToken,
        }),
      JWT_EXPIRY_TIME - 5000,
    )
  }
}

export const loginUser = async (
  loginUserData: LoginUserType,
): Promise<void> => {
  return publicRequest
    .post('auth/login', loginUserData)
    .then(res => {
      const Token = res.data.jwtToken
      onLoginSuccess(Token)
    })
    .catch(error => {
      console.log(error)
      throw new Error('로그인 에러')
    })
}

export const fetchLogout = async (email: string) => {
  return publicRequest
    .post('users/logout', email)
    .then(res => {
      return res.data
    })
    .catch(error => {
      console.log(error)
      throw new Error('로그아웃 에러')
    })
}

// 유저 stage 수정
export const updateUserStage = async (data: UpdateUserStageReqType) => {
  return publicRequest.post('/users/update', data).then(res => res.data)
}

export const getUserInformation = async (
  userNo: number,
): Promise<UserInformationType> => {
  return publicRequest
    .get(`/users/me/${userNo}`)
    .then(res => res.data)
    .catch(error => {
      throw new Error(error)
    })
}
