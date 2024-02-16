import * as s from '@src/components/DogDetail/style/ShelterInfoSectionStyle'
import { useCallback, useEffect, useRef, useState } from 'react'
import { atom, useAtom } from 'jotai/index'
import { ShelterInfoSectionType } from '@src/types/components/DogDetailType'

declare global {
  interface Window {
    kakao: never
  }
}

const defaultMap = new kakao.maps.Map(document.createElement('div'), {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
})

const mapAtom = atom<kakao.maps.Map>(defaultMap)

const ShelterInfoSection = (props: ShelterInfoSectionType) => {
  const { address, createdAt, userName } = props
  const mapRef = useRef<kakao.maps.Map>(null)
  const [latitudeValue, setLatitude] = useState(0)
  const [longitudeValue, setLongitude] = useState(0)
  const [mapValue, setMap] = useAtom(mapAtom)
  const adressData = address
  const initMap = useCallback(() => {
    // 위치가 잡히기 전에 임시로 띄우는 위치
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(latitudeValue, longitudeValue),
      disableDoubleClick: true,
      level: 3,
    }

    const map = new kakao.maps.Map(container as HTMLElement, options)
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(latitudeValue, longitudeValue),
    })
    marker.setMap(map)
    setMap(map)
  }, [latitudeValue, longitudeValue, setMap])

  const handleAddress = (adresshandleData: string) => {
    // 검색된 주소 위치 표시
    if (kakao.maps && kakao.maps.services) {
      const geocoder = new kakao.maps.services.Geocoder()
      geocoder.addressSearch(
        adresshandleData,
        (result: any[], status: kakao.maps.services.Status) => {
          if (status === kakao.maps.services.Status.OK) {
            const currentPos = new kakao.maps.LatLng(result[0].y, result[0].x)
            setLatitude(result[0].y)
            setLongitude(result[0].x)

            if (mapValue) {
              mapValue.panTo(currentPos)
            }
          }
        },
      )
    } else {
      console.error('Kakao maps or services not loaded')
    }
  }
  handleAddress(adressData)

  useEffect(() => {
    kakao.maps.load(() => initMap())
  }, [mapRef, latitudeValue, longitudeValue, initMap])

  return (
    <s.Container>
      <s.Date>
        <b>등록일</b> {createdAt.split(' ')[0]}
      </s.Date>
      <s.MapWrap>
        <s.Map id="map" />
      </s.MapWrap>
      <s.Name>{userName}</s.Name>
      <s.Address>
        {address} <b>복사</b>
      </s.Address>
    </s.Container>
  )
}

export default ShelterInfoSection
