import { publicRequest } from '@src/hooks/requestMethods'
import { JoinUserType } from '@src/types/userType'

export const fetchAfterAdoptionUser = async () => {
  return publicRequest.get('api/v1/users/admin/dogs').then(res => res.data)
}

export const joinUser = async (userData: JoinUserType) => {
  return publicRequest.post('api/v1/auth/join', userData).then(res => res.data)
}
