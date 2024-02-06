import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { CreateDogFileType } from '@src/types/components/CreateDogType'
import * as c from '@src/components/style/CommunityCreateFormStyle'

const CreateDogFile = (props: CreateDogFileType) => {
  const { file, setFile } = props

  const [nameList, setNameList] = useState<File[] | null>(null)

  const [isCameraAllowed, setIsCameraAllowed] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setIsCameraAllowed(true)
    } catch (error) {
      console.error('Error accessing camera:', error)
      setIsCameraAllowed(false)
    }
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files) {
      const fileArray = Array.from(files, f => f as File) // Use a mapping function
      const count = fileArray.filter(f => f.type.includes('video')).length

      if (count <= 1) {
        setFile(fileArray)
        setNameList(fileArray)
      } else {
        alert('동영상은 1개만 첨부 가능합니다.')
      }
    }
  }

  const resetFile = () => {
    setFile([])
    setNameList(null)
  }

  useEffect(() => {
    setNameList(file ? Array.from(file) : null)
  }, [file])

  return (
    <div>
      {!isCameraAllowed ? (
        <button type="button" onClick={requestCameraPermission}>
          Allow Camera Access
        </button>
      ) : (
        <c.Container>
          <p>사진 다중 첨부</p>
          <div>
            {nameList &&
              Object.values(nameList).map(f => (
                <div key={f.name}>
                  {f.name}
                  <br />
                </div>
              ))}
          </div>
          <label htmlFor="file">파일찾기</label>
          <input
            id="file"
            name="files"
            type="file"
            accept="image/*, video/*"
            multiple
            onChange={handleFile}
          />
          <br />
          <button type="button" onClick={resetFile}>
            삭제하기
          </button>
          <br />
        </c.Container>
      )}
    </div>
  )

  // const { file, setFile } = props
  // const [, setNameList] = useState<File[] | null>(null)
  //
  // // const [imageViewValue] = useState<string[]>([])
  //
  // // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  // //   const { files } = e.target
  // //   let imageUrlLists: string[] = [...createDogData.images]
  // //   if (files) {
  // //     const fileArray = Array.from(files, f => f as File)
  // //     setCreateDogData(prevData => ({
  // //       ...prevData,
  // //       images: [
  // //         ...prevData.images,
  // //         ...fileArray.map(file => URL.createObjectURL(file)),
  // //       ],
  // //     }))
  // //     for (let i = 0; i < files.length; i += 1) {
  // //       const currentImageUrl = URL.createObjectURL(files[i])
  // //       imageUrlLists.push(currentImageUrl)
  // //     }
  // //     if (imageUrlLists.length > 10) {
  // //       imageUrlLists = imageUrlLists.slice(0, 10)
  // //     }
  // //     setImageView(imageUrlLists)
  // //   }
  // // }
  //
  // // const handleDeleteImage = (id: number) => {
  // //   setImageView(imageViewValue.filter((_, index) => index !== id))
  // //   setFile(prevData => ({
  // //     ...prevData,
  // //     images: prevData.images.filter((_, index) => index !== id),
  // //   }))
  // // }
  //
  // const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { files } = e.target
  //   if (files) {
  //     const fileArray = Array.from(files, f => f as File) // Use a mapping function
  //     const count = fileArray.filter(f => f.type.includes('video')).length
  //
  //     if (count <= 1) {
  //       setFile(fileArray)
  //       setNameList(fileArray)
  //     } else {
  //       alert('동영상은 1개만 첨부 가능합니다.')
  //     }
  //   }
  // }
  //
  // return (
  //   <c.ImgContainer>
  //     <c.ImgLabel htmlFor="image">
  //       <c.ImgBox>
  //         <img className="img" src="/icon/icon_camera.png" alt="" />
  //         <p className="p">{file.length}/10</p>
  //       </c.ImgBox>
  //     </c.ImgLabel>
  //     <c.ImageInput
  //       id="image"
  //       type="file"
  //       accept="image/*"
  //       multiple
  //       onChange={handleFileUpload}
  //     />
  //     {imageViewValue.map((imageFile, id) => (
  //       <c.ImagePreview key={`${imageFile}`}>
  //         <img
  //           alt={`${imageFile}-${id}`}
  //           src={imageFile}
  //           style={{ height: '70px', width: '70px' }}
  //         />
  //         {/* <c.Delete onClick={() => handleDeleteImage(id)}>X</c.Delete> */}
  //       </c.ImagePreview>
  //     ))}
  //   </c.ImgContainer>
  // )
}

export default CreateDogFile
