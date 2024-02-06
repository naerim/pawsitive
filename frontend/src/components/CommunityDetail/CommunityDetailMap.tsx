import * as s from '@src/components/CommunityDetail/_style/CommunityDetailMapStyle'
import { MutableRefObject, useCallback, useEffect, useRef } from 'react'

declare global {
  interface Window {
    kakao: never
  }
}

interface PropsType {
  latitude: number
  longitude: number
}

const CommunityDetailMap = (props: PropsType) => {
  const { latitude, longitude } = props
  const mapRef = useRef<kakao.maps.Map>(null)

  const initMap = useCallback(() => {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      disableDoubleClick: true,
      level: 3,
    }

    const map = new kakao.maps.Map(container as HTMLElement, options)
    ;(mapRef as unknown as MutableRefObject<kakao.maps.Map>).current = map

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(latitude, longitude),
    })
    marker.setMap(map)
  }, [latitude, longitude])

  useEffect(() => {
    kakao.maps.load(() => initMap())
  }, [mapRef, latitude, longitude, initMap])

  return (
    <s.Container>
      <s.MapWrap>
        <s.Map id="map" />
      </s.MapWrap>
      <s.Address>
        광주광역시 북구 본촌마을길 27 <b>복사</b>
      </s.Address>
    </s.Container>
  )
}

export default CommunityDetailMap
