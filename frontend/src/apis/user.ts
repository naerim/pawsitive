import { publicRequest } from '@src/hooks/requestMethods'

export const fetchAfterAdoptionUser = async () => {
  return publicRequest.get('api/v1/users/admin/dogs').then(res => res.data)
}
