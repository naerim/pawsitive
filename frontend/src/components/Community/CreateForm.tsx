import { atom, useAtom } from 'jotai'
import * as c from '@src/components/style/CommunityCreateFormStyle'
import React from 'react'

const titleAtom = atom('')
const categoryAtom = atom('0')
const contentAtom = atom('')
const imageFileAtom = atom('')
const isPublicAtom = atom(true)
const locationAtom = atom('')

const categoryList = [
  { value: '쇼핑하개', index: 0 },
  { value: '지식쌓개', index: 1 },
  { value: '자랑하개', index: 2 },
  { value: '영양있개', index: 3 },
]
const CreateForm = () => {
  const [categoryValue, setCategory] = useAtom(categoryAtom)
  const [titleValue, setTitle] = useAtom(titleAtom)
  const [contentValue, setContent] = useAtom(contentAtom)
  const [imageFileValue, setImageFile] = useAtom(imageFileAtom)
  const [isPublicValue, setIsPublic] = useAtom(isPublicAtom)
  const [locationValue, setLocation] = useAtom(locationAtom)

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

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLocation(e.target.value)

  const handleSubmit = () => {
    console.log('title:', titleValue)
    console.log('category:', categoryValue)
    console.log('content:', contentValue)
    console.log('location:', locationValue)
    console.log('isPublic:', isPublicValue)
  }
  return (
    <c.Container>
      <h1>생성폼입니다.</h1>
      <br />
      <c.Label htmlFor="title">제 목 :</c.Label>
      <input id="title" value={titleValue} onChange={handleTitleChange} />
      <br />

      <c.Label htmlFor="category">카테고리 :</c.Label>
      <select
        id="category"
        value={categoryValue}
        onChange={handleCategoryChange}
      >
        {categoryList.map(categoryItem => (
          <option value={categoryItem.index} key={categoryItem.index}>
            {categoryItem.value}
          </option>
        ))}
      </select>
      <br />

      <c.Label htmlFor="content">내 용 :</c.Label>
      <input id="content" value={contentValue} onChange={handleContentChange} />
      <br />

      <c.Label htmlFor="image">사진 추가하기</c.Label>
      <c.ImageInput
        id="image"
        type="file"
        accept="image/*"
        // value={locationValue}
        onChange={handleFileUpload}
      />
      <c.ImagePreview>
        {imageFileValue ? (
          <img
            src={imageFileValue}
            alt="upload img"
            style={{ maxWidth: '100%', height: '150px', width: 'auto' }}
          />
        ) : (
          <p>파일이 추가되지 않았습니다.</p>
        )}
      </c.ImagePreview>
      <br />

      <c.Label htmlFor="isPublic">비공개 :</c.Label>
      <input
        type="checkbox"
        id="isPublic"
        defaultChecked={false}
        onChange={handleIsPublicChange}
      />
      <br />

      <c.Label htmlFor="위치">위 치 :</c.Label>
      <input value={locationValue} onChange={handleLocationChange} />
      <br />

      <button type="submit" onClick={handleSubmit}>
        게시글 등록
      </button>
    </c.Container>
  )
}

export default CreateForm
