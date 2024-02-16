import { useSetAtom } from 'jotai'
import { userAtom } from '@src/stores/atoms/user'

const SettingStage = () => {
  const setUser = useSetAtom(userAtom)

  const changeUserStage = (num: number) =>
    setUser(user => ({ ...user, stage: num }))

  return (
    <div>
      <button type="button" onClick={() => changeUserStage(0)}>
        stage 0
      </button>
      <button type="button" onClick={() => changeUserStage(1)}>
        stage 1
      </button>
      <button type="button" onClick={() => changeUserStage(2)}>
        stage 2
      </button>
      <button type="button" onClick={() => changeUserStage(3)}>
        stage 3
      </button>
      <button type="button" onClick={() => changeUserStage(4)}>
        stage 4
      </button>
    </div>
  )
}

export default SettingStage
