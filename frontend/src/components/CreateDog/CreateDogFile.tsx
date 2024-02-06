import { ChangeEvent, useState } from 'react'
import { CreateDogFileType } from '@src/types/components/CreateDogType'
import * as c from '@src/components/style/CommunityCreateFormStyle'

const CreateDogFile = (props: CreateDogFileType) => {
  const { file, setFile } = props
  const [imageViewValue, setImageView] = useState<string[]>([])

  // const [isCameraAllowed, setIsCameraAllowed] = useState<boolean>(false)
  // const videoRef = useRef<HTMLVideoElement | null>(null)
  //
  // const requestCameraPermission = async () => {
  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({ video: true })
  //     if (videoRef.current) {
  //       videoRef.current.srcObject = stream
  //     }
  //     setIsCameraAllowed(true)
  //   } catch (error) {
  //     console.error('Error accessing camera:', error)
  //     setIsCameraAllowed(false)
  //   }
  // }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    let imageUrlLists: string[] = [...imageViewValue]

    if (files) {
      const fileArray = Array.from(files, f => f as File)
      const newFileArray = [...file, ...fileArray]
      const videoFiles = newFileArray.filter(f => f.type.includes('video'))

      if (newFileArray.length > 10) {
        alert('파일은 최대 10개까지만 첨부할 수 있습니다.')
        return
      }

      if (videoFiles.length > 1) {
        alert('동영상은 1개만 첨부 가능합니다.')
        return
      }

      setFile(newFileArray)

      for (let i = 0; i < files.length; i += 1) {
        const currentImageUrl = URL.createObjectURL(files[i])
        imageUrlLists.push(currentImageUrl)
      }
      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10)
      }

      setImageView(imageUrlLists)
    }
  }

  const handleDeleteImage = (id: number) => {
    setImageView(imageViewValue.filter((_, index) => index !== id))
    setFile(file.filter((_, index) => index !== id))
  }

  return (
    <c.ImgContainer>
      <c.ImgLabel htmlFor="image">
        <c.ImgBox>
          <img className="img" src="/icon/icon_camera.png" alt="" />
          <p className="p">{file.length}/10</p>
        </c.ImgBox>
      </c.ImgLabel>
      <c.ImageInput
        id="image"
        type="file"
        accept="image/* viedo/*"
        multiple
        onChange={handleFile}
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

export default CreateDogFile
