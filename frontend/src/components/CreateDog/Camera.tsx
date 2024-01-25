import { useRef, useState } from 'react'

const Camera = () => {
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

  return (
    <div>
      {!isCameraAllowed ? (
        <button onClick={requestCameraPermission}>Allow Camera Access</button>
      ) : (
        <>
          <p>사진 다중 첨부</p>
          <input type="file" accept="image/*" multiple />
          <h1>동영상</h1>
          <input type="file" accept="video/*" />
          <h1>카메라</h1>
          <input type="file" accept="image/*" capture="environment" />
        </>
      )}
    </div>
  )
}

export default Camera
