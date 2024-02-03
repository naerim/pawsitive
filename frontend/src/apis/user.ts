import { publicRequest } from '@src/hooks/requestMethods'
import { JoinUserResponseType, JoinUserType } from '@src/types/userType'

export const fetchAfterAdoptionUser = async () => {
  return publicRequest.get('api/v1/users/admin/dogs').then(res => res.data)
}

export const joinUser = async (
  userData: JoinUserType,
): Promise<JoinUserResponseType> => {
  return publicRequest.post('/auth/join', userData).then(res => res.data)
}
