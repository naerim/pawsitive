import * as s from '@src/components/DogDetail/_style/ShelterInfoSectionStyle'
import { MutableRefObject, useCallback, useEffect, useRef } from 'react'
import { LocationType } from '@src/types/propsType'
import Locations from '@src/components/Community/Locations'

declare global {
  interface Window {
    kakao: never
  }
}

const ShelterInfoSection = () => {
  const mapRef = useRef<kakao.maps.Map>(null)
  const location: LocationType | string = Locations()

  const initMap = useCallback(() => {
    // 위치가 잡히기 전에 임시로 띄우는 위치
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(35.19088746066458, 126.81240608875785),
      disableDoubleClick: true,
      level: 3,
    }

    const map = new kakao.maps.Map(container as HTMLElement, options)
    ;(mapRef as unknown as MutableRefObject<kakao.maps.Map>).current = map
  }, [])

  useEffect(() => {
    kakao.maps.load(() => initMap())
  }, [mapRef, location, initMap])

  return (
    <s.Container>
      <s.Date>
        <b>등록일</b> 2024.02.04
      </s.Date>
      <s.MapWrap>
        <s.Map id="map" />
      </s.MapWrap>
      <s.Name>광주유기견보호소</s.Name>
      <s.Address>
        광주광역시 북구 본촌마을길 27 <b>복사</b>
      </s.Address>
    </s.Container>
  )
}

export default ShelterInfoSection
