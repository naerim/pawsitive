import * as c from '@src/components/style/CommunityCreateFormStyle'
import React, { useState } from 'react'
import { CommunityFileType } from '@src/types/components/CommunityType'

const ImageUpload = (props: CommunityFileType) => {
  const { imageFilesValue, setImageFiles } = props
  const [imageViewValue, setImageView] = useState<string[]>([])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    let imageUrlLists: string[] = [...imageViewValue]
    if (files) {
      const fileArray = Array.from(files, f => f as File)
      setImageFiles(fileArray)
      for (let i = 0; i < files.length; i++) {
        const currentImageUrl = URL.createObjectURL(files[i])
        imageUrlLists.push(currentImageUrl)
      }

      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10)
      }

      setImageView(imageUrlLists)
    }
  }

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setImageView(imageViewValue.filter((_, index) => index !== id))
    setImageFiles(imageFilesValue.filter((_, index) => index !== id))
  }

  return (
    <c.ImgContainer>
      <c.ImgLabel htmlFor="image">
        <c.ImgBox>
          <img className="img" src="/icon/icon_camera.png" alt="" />
          <p className="p">{imageFilesValue.length}/10</p>
        </c.ImgBox>
      </c.ImgLabel>
      <c.ImageInput
        id="image"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileUpload}
      />
      {imageViewValue.map((imageFile, id) => (
        <c.ImagePreview key={`${imageFile}`}>
          <img
            alt={`${imageFile}-${id}`}
            src={imageFile}
            style={{ height: '70px', width: '70px' }}
          />
          <c.Delete onClick={() => handleDeleteImage(id)}>X</c.Delete>
        </c.ImagePreview>
      ))}
    </c.ImgContainer>
  )
}
export default ImageUpload
