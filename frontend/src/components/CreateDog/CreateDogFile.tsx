import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { CreateDogFileType } from '@src/types/components/CreateDogType.ts'
import * as c from '@src/components/style/CreateDogFileStyle'

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
      const fileArray = Array.from(files, file => file as File) // Use a mapping function
      const count = fileArray.filter(file => file.type.includes('video')).length

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
          <c.SelectFile htmlFor="file">파일찾기</c.SelectFile>
          <c.FileInput
            id="file"
            name="files"
            type="file"
            accept="image/*, video/*"
            multiple
            onChange={handleFile}
          />
          <br />
          <div onClick={resetFile}>삭제하기</div>
          <br />
          <h1>모바일일때 - 카메라</h1>
          <input type="file" accept="image/*" capture="environment" />
        </c.Container>
      )}
    </div>
  )
}

export default CreateDogFile
