import { atom, useAtom } from 'jotai'
import * as c from '@src/components/style/CommunityCreateFormStyle'
import React, { useEffect, useRef } from 'react'
import { DaumPostData } from '@src/types/components/SignUpType'
import DaumPostcode from 'react-daum-postcode'
import { useNavigate } from 'react-router-dom'

declare global {
  interface Window {
    kakao: any
  }
}

const titleAtom = atom('')
const categoryAtom = atom('0')
const contentAtom = atom('')
const imageFileAtom = atom('')
const isPublicAtom = atom(true)
const addressAtom = atom('')
const latitudeAtom = atom(0)
const longitudeAtom = atom(0)
const isDaumPostcodeOpenAtom = atom(false)

const defaultMap = new window.kakao.maps.Map(document.createElement('div'), {
  center: new window.kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
})

const defaultMarker = new window.kakao.maps.Marker()

const mapAtom = atom<kakao.maps.Map>(defaultMap)
const markerAtom = atom<kakao.maps.Marker>(defaultMarker)

const categoryList = [
  { value: '쇼핑하개', index: 1 },
  { value: '지식쌓개', index: 2 },
  { value: '자랑하개', index: 3 },
  { value: '영양있개', index: 4 },
]

const CreateForm = () => {
  const [categoryValue, setCategory] = useAtom(categoryAtom)
  const [titleValue, setTitle] = useAtom(titleAtom)
  const [contentValue, setContent] = useAtom(contentAtom)
  const [imageFileValue, setImageFile] = useAtom(imageFileAtom)
  const [isPublicValue, setIsPublic] = useAtom(isPublicAtom)
  const [mapValue, setMap] = useAtom(mapAtom)
  const [markerValue, setMarker] = useAtom(markerAtom)
  const [latitudeValue, setLatitude] = useAtom(latitudeAtom)
  const [longitudeValue, setLongitude] = useAtom(longitudeAtom)
  const [addressValue, setAddress] = useAtom(addressAtom)
  const [isDaumPostcodeOpenValue, setIsDaumPostcodeOpen] = useAtom(
    isDaumPostcodeOpenAtom,
  )
  const navigate = useNavigate()

  const containerRef = useRef<HTMLDivElement>(null)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    const uploadFile = files && files[0]
    if (uploadFile) {
      const reader = new FileReader()
      reader.readAsDataURL(uploadFile)
      reader.onloadend = () => {
        setImageFile(reader.result as string)
      }
    }
  }

  const handleIsPublicChange = () => setIsPublic(!isPublicValue)

  const handleDaumPostcodeOpen = () => {
    setIsDaumPostcodeOpen(true)
    setAddress('')
  }

  // 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = containerRef.current
      if (container) {
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        }
        const newMap = new window.kakao.maps.Map(
          container as HTMLElement,
          options,
        )
        setMap(newMap)
        setMarker(new window.kakao.maps.Marker())
      }
    })
  }, [setMap, setMarker])

  const handleAddressComplete = (data: DaumPostData) => {
    setAddress(data.address)
    setIsDaumPostcodeOpen(false)

    // 검색된 주소 위치 표시
    if (window.kakao.maps && window.kakao.maps.services) {
      const geocoder = new window.kakao.maps.services.Geocoder()
      geocoder.addressSearch(
        data.address,
        (result: any[], status: kakao.maps.services.Status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const currentPos = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            )
            setLatitude(result[0].y)
            setLongitude(result[0].x)

            if (mapValue && markerValue) {
              markerValue.setMap(null)
              markerValue.setPosition(currentPos)
              markerValue.setMap(mapValue)

              mapValue.panTo(currentPos)
            }
          }
        },
      )
    } else {
      console.error('Kakao maps or services not loaded')
    }
  }

  // useEffect 내부에서 DaumPostcode로 주소를 선택했을 때의 콜백 함수를 등록
  useEffect(() => {
    if (mapValue) {
      const clickHandler = (mouseEvent: kakao.maps.MouseEvent) => {
        const geocoder = new window.kakao.maps.services.Geocoder()

        geocoder.coord2Address(
          mouseEvent.latLng.getLng(),
          mouseEvent.latLng.getLat(),
          (result: any[], status: kakao.maps.services.Status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const addr = result[0].address.address_name
              // 마커로 찍은 주소를 저장한다.
              setAddress(addr)
              setLatitude(mouseEvent.latLng.getLat())
              setLongitude(mouseEvent.latLng.getLng())
              // 기존 마커를 제거하고 새로운 마커를 넣음
              markerValue.setMap(null)
              // 마커를 클릭한 위치에 표시
              markerValue.setPosition(mouseEvent.latLng)
              markerValue.setMap(mapValue)
            }
          },
        )
      }

      // 클릭 이벤트 등록
      window.kakao.maps.event.addListener(mapValue, 'click', clickHandler)

      // 컴포넌트가 언마운트될 때 클릭 이벤트 제거
      return () => {
        window.kakao.maps.event.removeListener(mapValue, 'click', clickHandler)
      }
    }
  }, [mapValue, markerValue, setAddress, setLatitude, setLongitude])

  const handleSubmit = () => {
    console.log('title:', titleValue)
    console.log('category:', categoryValue)
    console.log('content:', contentValue)
    console.log('imageFile:', imageFileValue)
    console.log('isPublic:', isPublicValue)
    console.log('latitude:', latitudeValue)
    console.log('longitude:', longitudeValue)
  }

  // 뒤로가기 버튼 로직
  const closeClick = () => {
    navigate(-1)
  }

  return (
    <c.Container>
      <c.Top>
        <c.CloseButton type="button" onClick={closeClick}>
          <img className="img" src="/icon/icon_close.png" alt="" />
        </c.CloseButton>
        <c.H1>글쓰기</c.H1>

        <c.SubmitButton type="submit" onClick={handleSubmit}>
          완료
        </c.SubmitButton>
      </c.Top>

      <c.ImgContainer>
        <c.ImgLabel htmlFor="image">
          <c.ImgBox>
            <img className="img" src="/icon/icon_camera.png" alt="" />
            <p className="p">0/10</p>
          </c.ImgBox>
        </c.ImgLabel>
        <c.ImageInput
          id="image"
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
        />
        {imageFileValue && (
          <c.ImagePreview>
            <img
              src={imageFileValue}
              alt="upload img"
              style={{ height: '70px', width: '70px' }}
            />
          </c.ImagePreview>
        )}
        {/* <c.ImagePreview> */}
        {/*  {imageFileValue ? ( */}
        {/*    <img */}
        {/*      src={imageFileValue} */}
        {/*      alt="upload img" */}
        {/*      style={{ height: '70px', width: 'auto' }} */}
        {/*    /> */}
        {/*  ) : ( */}
        {/*    <p>파일이 추가되지 않았습니다.</p> */}
        {/*  )} */}
        {/* </c.ImagePreview> */}
      </c.ImgContainer>
      <c.DivLine />

      <c.Top>
        <c.Tag>
          <c.Label htmlFor="title">글 제목</c.Label>
          <c.ContentInput
            id="title"
            value={titleValue}
            onChange={handleTitleChange}
          />
        </c.Tag>

        <c.Tag>
          <c.Label htmlFor="isPublic">비공개</c.Label>
          <c.CheckBox
            type="checkbox"
            id="isPublic"
            defaultChecked={false}
            onChange={handleIsPublicChange}
          />
          <label className="label" htmlFor="isPublic" />
        </c.Tag>
      </c.Top>
      <c.DivLine />

      <c.Tag>
        <c.Label htmlFor="category">카테고리</c.Label>
        <c.Select
          id="category"
          value={categoryValue}
          onChange={handleCategoryChange}
        >
          <option selected hidden>
            카테고리 선택 ∨
          </option>
          {categoryList.map(categoryItem => (
            <option value={categoryItem.index} key={categoryItem.index}>
              {categoryItem.value}
            </option>
          ))}
        </c.Select>
        {/* <c.Label htmlFor="category"> */}
        {/*  <img className="img" src="/icon/icon_black_arrow_bottom.png" alt="" /> */}
        {/* </c.Label> */}
      </c.Tag>
      <c.DivLine />

      <c.Tag>
        <c.Label htmlFor="content">내 용 :</c.Label>
        <c.ContentInput
          id="content"
          value={contentValue}
          onChange={handleContentChange}
        />
        <br />
      </c.Tag>
      <c.DivLine />

      <c.MapDiv>
        {isDaumPostcodeOpenValue && (
          <c.MapCloseButton>
            <button type="button" onClick={() => setIsDaumPostcodeOpen(false)}>
              닫기
            </button>
            <DaumPostcode
              onComplete={handleAddressComplete}
              style={{ position: 'absolute', zIndex: 400 }}
            />
          </c.MapCloseButton>
        )}
        <c.MapContentInput
          placeholder="주소를 검색해주세요"
          onClick={handleDaumPostcodeOpen}
          id="address"
          value={addressValue}
          readOnly
        />
        <c.Map ref={containerRef} />
      </c.MapDiv>

      <br />
      <br />
      <br />
      <br />
    </c.Container>
  )
}

export default CreateForm
