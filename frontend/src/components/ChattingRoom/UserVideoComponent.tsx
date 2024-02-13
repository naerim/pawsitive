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

  const getNicknameTag = () =>
    streamManager !== undefined &&
    JSON.parse(streamManager.stream.connection.data).clientData

  return (
    <u.Container>
      <video autoPlay={autoplay} ref={videoRef}>
        <track kind="captions" />
      </video>
      <div>
        <p>{getNicknameTag()}</p>
      </div>
    </u.Container>
  )
}

export default UserVideoComponent
