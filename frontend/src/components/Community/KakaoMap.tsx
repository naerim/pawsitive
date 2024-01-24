import * as m from '@src/components/style/KakaoMapStyle'
import { useEffect, useState } from 'react' // 카카오는 window에 정의되어 있어서 window에서 불러와야됨

// 카카오는 window에 정의되어 있어서 window에서 불러와야됨
const { kakao } = window

const KakaoMap = () => {
  const [positions] = useState([
    {
      title: '장인족발',
      latlng: new kakao.maps.LatLng(35.190452750450746, 126.81253061072852),
    },
    {
      title: '더벤티',
      latlng: new kakao.maps.LatLng(35.19025402392482, 126.81225382783505),
    },
    {
      title: '짚신매운갈비찜',
      latlng: new kakao.maps.LatLng(35.1904356270745, 126.81311532447003),
    },
    {
      title: '조선짬뽕',
      latlng: new kakao.maps.LatLng(35.19154796314691, 126.81257475978535),
    },
  ])

  useEffect(() => {
    // const mapContainer = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
    // const mapOption = {
    //   // 지도를 생성할 때 필요한 기본 옵션
    //   center: new kakao.maps.LatLng(35.19088746066458, 126.81240608875785), // 지도의 중심좌표.
    //   level: 3, // 지도의 레벨(확대, 축소 정도)
    // }
    // const map = new kakao.maps.Map(mapContainer, mapOption) // 지도 생성 및 객체 리턴
    // // 여기까지 기본 지도 생성 로직
    // 지도 로딩 완료 시 이벤트 핸들러 등록
    const map = new kakao.maps.Map(document.getElementById('map'), {
      center: new kakao.maps.LatLng(35.19088746066458, 126.81240608875785),
      level: 3,
    })

    // 인포창 한번에 하나만 뜨도록 설정
    let openInfowindow: { close: () => void } | null = null

    for (const position of positions) {
      const marker = new kakao.maps.Marker({
        position: position.latlng,
      })
      // 마커 클릭 이벤트 핸들러 내에서 인포윈도우 내용 설정
      kakao.maps.event.addListener(marker, 'click', function () {
        if (openInfowindow) {
          openInfowindow.close()
        }

        const iwContent = `<div>${position.title}</div>`
        const infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: true,
        })
        // 마커 위에 인포윈도우를 표시
        infowindow.open(map, marker)

        openInfowindow = infowindow
      })
      marker.setMap(map)
    }
  }, [])

  return (
    <div>
      <m.Container id="map" />
    </div>
  )
}

export default KakaoMap
