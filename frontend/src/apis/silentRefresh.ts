import { publicRequest } from '@src/hooks/requestMethods'
import { onLoginSuccess } from '@src/apis/user'
import { LoginRefreshType } from '@src/types/userType'

export const onSilentRefresh = async (data: LoginRefreshType) => {
  return publicRequest
    .post('/users/silent-refresh', data.postData, {
      headers: {
        Authorization: `${data.grantType} ${data.accessToken}`,
      },
    })
    .then(res => {
      onLoginSuccess(res.data)
    })
    .catch(error => {
      console.log(error)
      throw new Error('리프레시 토큰 연장 에러')
    })
}
