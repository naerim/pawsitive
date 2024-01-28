import { useMemo } from 'react'
import { locationAtom } from '@src/stores/atoms/location'
import { useAtom } from 'jotai/index'

const Locations = () => {
  const [location, setLocation] = useAtom(locationAtom)

  useMemo(() => {
    const success = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    }

    const error = () => {
      setLocation({
        latitude: 35.19088746066458,
        longitude: 126.81240608875785,
      })
      console.log('위치 받기 실패')
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      setLocation({
        latitude: 35.19088746066458,
        longitude: 126.81240608875785,
      })
      console.log('giolocation 연결 실패')
    }
  }, [navigator.geolocation.getCurrentPosition])
  // 외부 변수를 참조 값에 넣는 것을 권장하지 않는다고 하는데, 현재 위치가 바뀔 때만 실행되게 하고 싶어서 이렇게 적었습니다.. 다른 방안 있으면 수정 부탁드립니다.
  return location
}

export default Locations
