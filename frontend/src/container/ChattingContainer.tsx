import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai/index'
import { userAtom } from '@src/stores/atoms/user'

const ChattingContainer = () => {
  const navigate = useNavigate()

  const setUser = useSetAtom(userAtom)
  const changeUserStage = (num: number) =>
    setUser(user => ({ ...user, stage: num }))

  const onClickHandler = () => {
    changeUserStage(3)
    navigate('/')
  }

  return (
    <div>
      <div>chatting 목록</div>
      <button onClick={onClickHandler}> chatting 완료</button>
    </div>
  )
}

export default ChattingContainer
