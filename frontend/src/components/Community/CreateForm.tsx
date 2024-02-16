import { atom, useAtom, useAtomValue } from 'jotai'
import * as c from '@src/components/style/CommunityCreateFormStyle'
import React, { useEffect, useRef, useState } from 'react'
import { DaumPostData } from '@src/types/components/SignUpType'
import DaumPostcode from 'react-daum-postcode'
import { useNavigate } from 'react-router-dom'
import { LocationType } from '@src/types/propsType'
import Locations from '@src/components/Community/Locations'
import { useMutation } from '@tanstack/react-query'
import { fetchCommunityCreate } from '@src/apis/community'
import ImageUpload from '@src/components/Community/ImageUpload'
import Checkbox from '@mui/material/Checkbox'
import { userAtom } from '@src/stores/atoms/user'

declare global {
  interface Window {
    kakao: never
  }
}
const defaultMap = new kakao.maps.Map(document.createElement('div'), {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
})

const defaultMarker = new kakao.maps.Marker({
  position: defaultMap.getCenter(),
})

const mapAtom = atom<kakao.maps.Map>(defaultMap)
const markerAtom = atom<kakao.maps.Marker>(defaultMarker)

const categoryList = [
  { value: '지식쌓개', index: 1 },
  { value: '자랑하개', index: 2 },
  { value: '영양있개', index: 3 },
  { value: '쇼핑하개', index: 4 },
  { value: '산책하개', index: 5 },
]

const CreateForm = () => {
  const [titleValue, setTitle] = useState('')
  const [contentValue, setContent] = useState('')
  const [isPublicValue, setIsPublic] = useState(true)
  const [latitudeValue, setLatitude] = useState(0)
  const [longitudeValue, setLongitude] = useState(0)
  const [categoryValue, setCategory] = useState('')
  const [imageFilesValue, setImageFiles] = useState<File[]>([])

  const [mapValue, setMap] = useAtom(mapAtom)
  const [markerValue, setMarker] = useAtom<kakao.maps.Marker>(markerAtom)
  const [addressValue, setAddress] = useState('')
  const [isDaumPostcodeOpenValue, setIsDaumPostcodeOpen] = useState(false)
  const location: LocationType | string = Locations()
  const navigate = useNavigate()
  const user = useAtomValue(userAtom)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value)

  const handleIsPublicChange = () => setIsPublic(!isPublicValue)

  const handleDaumPostcodeOpen = () => {
    setIsDaumPostcodeOpen(true)
    setAddress('')
  }

  // 카카오맵 불러오기
  useEffect(() => {
    kakao.maps.load(() => {
      const container = containerRef.current
      if (container && location.latitude !== 0) {
        const options = {
          center: new kakao.maps.LatLng(location.latitude, location.longitude),
          level: 3,
        }
        const newMap = new kakao.maps.Map(container as HTMLElement, options)
        setMap(newMap)
        // @ts-ignore
        setMarker(new kakao.maps.Marker({}))
      }
    })
  }, [setMap, setMarker, location.latitude, location.longitude])

  const handleAddressComplete = (datas: DaumPostData) => {
    setAddress(datas.address)
    setIsDaumPostcodeOpen(false)

    // 검색된 주소 위치 표시
    if (kakao.maps && kakao.maps.services) {
      const geocoder = new kakao.maps.services.Geocoder()
      geocoder.addressSearch(
        datas.address,
        (result: any[], status: kakao.maps.services.Status) => {
          if (status === kakao.maps.services.Status.OK) {
            const currentPos = new kakao.maps.LatLng(result[0].y, result[0].x)
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
      const clickHandler = (mouseEvent: kakao.maps.event.MouseEvent) => {
        const geocoder = new kakao.maps.services.Geocoder()

        geocoder.coord2Address(
          mouseEvent.latLng.getLng(),
          mouseEvent.latLng.getLat(),
          (result: any[], status: kakao.maps.services.Status) => {
            if (status === kakao.maps.services.Status.OK) {
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
      kakao.maps.event.addListener(mapValue, 'click', clickHandler)

      // 컴포넌트가 언마운트될 때 클릭 이벤트 제거
      return () => {
        kakao.maps.event.removeListener(mapValue, 'click', clickHandler)
      }
    }
    return () => {}
  }, [mapValue, markerValue, setAddress, setLatitude, setLongitude])

  const { mutate } = useMutation({
    mutationKey: ['communityCreateForm'],
    mutationFn: fetchCommunityCreate,
    onSuccess(responseData) {
      navigate(`/community/${responseData.boardNo}`)
    },
    onError() {
      console.log('에러남')
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData: FormData = new FormData()
    const ArticleData = {
      userNo: user.userNo,
      title: titleValue,
      content: contentValue,
      isPublic: isPublicValue,
      latitude: latitudeValue,
      longitude: longitudeValue,
      categoryNo: categoryValue,
    }
    for (let i = 0; i < imageFilesValue.length; i += 1) {
      formData.append('files', imageFilesValue[i])
    }
    formData.append(
      'req',
      new Blob([JSON.stringify(ArticleData)], { type: 'application/json' }),
    )
    mutate(formData)
  }

  // useEffect(() => {
  //   navigate(`/community/${res.data.boardNo}`)
  // }, [data, navigate])

  // 뒤로가기 버튼 로직
  const closeClick = () => {
    navigate(-1)
  }

  return (
    <c.Container>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <c.Top>
          <c.CloseButton type="button" onClick={closeClick}>
            <img className="img" src="/icon/icon_close.png" alt="" />
          </c.CloseButton>
          <c.H1>글쓰기</c.H1>
          <c.SubmitButton type="submit">완료</c.SubmitButton>
        </c.Top>
        <ImageUpload
          imageFilesValue={imageFilesValue}
          setImageFiles={setImageFiles}
        />
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
            <c.CheckBoxDiv>
              <c.CheckBoxLabel>
                <Checkbox
                  checked={!isPublicValue}
                  onChange={handleIsPublicChange}
                  sx={{
                    color: '#c8c8c8',
                    '&.Mui-checked': {
                      color: '#c8c8c8',
                    },
                  }}
                />
                <c.CheckBoxOk>{isPublicValue}</c.CheckBoxOk>
              </c.CheckBoxLabel>
            </c.CheckBoxDiv>
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
            <option value="" hidden>
              카테고리 선택 ∨
            </option>
            {categoryList.map(categoryItem => (
              <option value={categoryItem.index} key={categoryItem.index}>
                {categoryItem.value}
              </option>
            ))}
          </c.Select>
        </c.Tag>
        <c.DivLine />

        <c.Tag>
          <c.TextAreaLabel htmlFor="content">내 용</c.TextAreaLabel>
          <c.TextArea
            // placeholder="_______________________________"
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
              <button
                type="button"
                onClick={() => setIsDaumPostcodeOpen(false)}
              >
                닫기
              </button>
              <DaumPostcode
                onComplete={handleAddressComplete}
                style={{ position: 'absolute', zIndex: 10, width: 'auto' }}
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
      </form>
      <br />
      <br />
      <br />
      <br />
    </c.Container>
  )
}

export default CreateForm
