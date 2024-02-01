import { useNavigate } from 'react-router-dom'
import { userAtom } from '@src/stores/atoms/user'
import { useSetAtom } from 'jotai/index'

const FillAdoptInfoContainer = () => {
  const navigate = useNavigate()

  const setUser = useSetAtom(userAtom)
  const changeUserStage = (num: number) =>
    setUser(user => ({ ...user, stage: num }))

  const onClickHandler = () => {
    changeUserStage(4)
    navigate('/')
  }

  return (
    <>
      아이의 이름을 입력하세요
      <button type="button" onClick={onClickHandler}>
        확인
      </button>
    </>
  )
}

export default FillAdoptInfoContainer
