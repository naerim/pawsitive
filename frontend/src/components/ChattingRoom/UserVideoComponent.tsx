import { UserVideoComponentType } from '@src/types/callType'
import { useEffect, useRef } from 'react'
import * as u from '@src/components/ChattingRoom/_style/UserVideoComponentStyle'

const UserVideoComponent = (props: UserVideoComponentType) => {
  const { streamManager } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  const autoplay = true
  useEffect(() => {
    if (streamManager && videoRef.current) {
      streamManager.addVideoElement(videoRef.current)
    }
  }, [streamManager])

  return (
    <u.Container>
      <video autoPlay={autoplay} ref={videoRef}>
        <track kind="captions" />
      </video>
    </u.Container>
  )
}

export default UserVideoComponent
