import * as m from '@src/components/style/KakaoMapStyle'
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import Locations from '@src/components/Community/Locations'
import CommunityCard from '@src/components/CommunityList/CommunityListItem.tsx'
import { LocationType } from '@src/types/propsType'
import { CommunityItemType } from '@src/types/components/CommunityType'
import { Link } from 'react-router-dom'

const KakaoMap = (props: { dummyData: CommunityItemType[] }) => {
  const { dummyData } = props
  const mapRef = useRef<kakao.maps.Map>(null)
  const location: LocationType | string = Locations()
  const [selectedMarker, setSelectedMarker] =
    useState<kakao.maps.Marker | null>(null)

  const handleMarkerClick = useCallback((marker: kakao.maps.Marker) => {
    setSelectedMarker(marker)
  }, [])

  const initMap = useCallback(() => {
    if (location.latitude !== 0) {
      const container = document.getElementById('map')
      const options = {
        center: new kakao.maps.LatLng(location.latitude, location.longitude),
        // 더블클릭시 크기 조정
        // disableDoubleClick: true,
        level: 3,
      }

      const map = new kakao.maps.Map(container as HTMLElement, options)
      ;(mapRef as unknown as MutableRefObject<kakao.maps.Map>).current = map
      // 확대, 축소 막기
      // map.setZoomable(false)

      dummyData.forEach(data => {
        const dataLat = data.latitude
        const dataLng = data.longitude
        const dataTitle = data.title

        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(dataLat, dataLng),
          map,
          title: dataTitle,
        })
        // 지도 클릭 시 selectedMarker를 null로 설정하는 이벤트 추가
        kakao.maps.event.addListener(map, 'click', function () {
          setSelectedMarker(null)
        })
        // 마커를 클릭했을 때의 이벤트 처리
        kakao.maps.event.addListener(marker, 'click', function () {
          handleMarkerClick(marker)
        })
      })
    } else {
      // 위치가 잡히기 전에 임시로 띄우는 위치
      const container = document.getElementById('map')
      const options = {
        center: new kakao.maps.LatLng(35.19088746066458, 126.81240608875785),
        disableDoubleClick: true,
        level: 3,
      }

      const map = new kakao.maps.Map(container as HTMLElement, options)
      ;(mapRef as unknown as MutableRefObject<kakao.maps.Map>).current = map
    }
  }, [dummyData, handleMarkerClick, location.latitude, location.longitude])

  useEffect(() => {
    kakao.maps.load(() => initMap())
  }, [mapRef, location, initMap])

  return (
    <m.Container>
      <m.MapContainer>
        <m.Map id="map" />
        <m.CurrentButton onClick={() => initMap()}>
          <img className="img" src="public/icon/icon_locate.png" alt="locate" />
        </m.CurrentButton>
      </m.MapContainer>
      {selectedMarker && (
        <m.InfoWindow>
          {/* 여기에 선택된 마커에 해당하는 게시글 컴포넌트를 렌더링 */}
          {dummyData.map(
            data =>
              // 예제: 마커의 타이틀이 게시글의 제목과 일치하면 렌더링
              selectedMarker.getTitle() === data.title && (
                <Link key={data.boardNo} to={`${data.boardNo}`}>
                  <CommunityCard data={data} />
                </Link>
              ),
          )}
        </m.InfoWindow>
      )}
    </m.Container>
  )
}

export default KakaoMap
