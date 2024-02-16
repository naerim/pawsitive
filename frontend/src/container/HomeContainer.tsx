import { userAtom } from '@src/stores/atoms/user'
import DefaultStage from '@src/components/Home/DefaultStage'
import FirstStage from '@src/components/Home/FirstStage'
import SecondStage from '@src/components/Home/SecondStage'
import ThirdStage from '@src/components/Home/ThirdStage'
import FourthStage from 'src/components/Home/FourthStage'
import { useAtom } from 'jotai/index'
import { useQuery } from '@tanstack/react-query'
import { getUserInformation } from '@src/apis/user'
import { useEffect, useState } from 'react'

const HomeContainer = () => {
  const [user, setUser] = useAtom(userAtom)
  const [isUserLogin, setIsUserLogin] = useState(false)

  const { data } = useQuery({
    queryKey: ['userInformation', user],
    queryFn: () => getUserInformation(user.userNo),

    enabled: isUserLogin,
  })

  useEffect(() => {
    if (user.userNo && user.role === 'USER') {
      setIsUserLogin(true)
    }
  }, [user])

  useEffect(() => {
    if (data) {
      setUser(Prevdata => ({
        ...Prevdata,
        stage: data.stage,
      }))
    }
  }, [data, setUser])

  let currentStageComponent

  switch (user.stage) {
    case 0:
      currentStageComponent = <DefaultStage />
      break
    case 1:
      currentStageComponent = <FirstStage />
      break
    case 2:
      currentStageComponent = <SecondStage />
      break
    case 3:
      currentStageComponent = <ThirdStage />
      break
    case 4:
      currentStageComponent = <FourthStage />
      break
    default:
      currentStageComponent = <div />
  }

  return <div>{currentStageComponent}</div>
}

export default HomeContainer
