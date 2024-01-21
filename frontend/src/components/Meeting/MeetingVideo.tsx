import { useEffect, useRef, useState } from 'react'
import { StreamManager } from 'openvidu-browser'
import styled from 'styled-components'

interface Props {
  streamManager: StreamManager
}

const MeetingVideo = ({ streamManager }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const autoplay = true
  const [isCameraOn, setIsCameraOn] = useState(true)
  useEffect(() => {
    if (streamManager && videoRef.current) {
      streamManager.addVideoElement(videoRef.current)
    }
  }, [streamManager])

  const handleCameraToggle = () => {
    if (streamManager) {
      const publisher = streamManager

      // Get the media stream of the publisher
      const mediaStream = publisher.stream.getMediaStream()

      // Get the video track from the media stream
      const videoTrack = mediaStream.getVideoTracks()[0]

      // Toggle the video track
      if (videoTrack) {
        videoTrack.enabled = !isCameraOn
        setIsCameraOn(prev => !prev) // Update state
      }
    }
  }

  const ButtonWrap = styled.div`
    height: 13vh;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
  `

  return (
    <div>
      <video autoPlay={autoplay} ref={videoRef} style={{ width: '100%' }}>
        <track kind="captions" />
      </video>
      <ButtonWrap>
        <button type="button" onClick={handleCameraToggle}>
          비디오
        </button>
      </ButtonWrap>
    </div>
  )
}

export default MeetingVideo
