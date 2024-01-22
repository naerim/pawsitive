import { StreamManager } from 'openvidu-browser'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'

interface Props {
  streamManager: StreamManager
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const UserVideoComponent = ({ streamManager }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const autoplay = true
  useEffect(() => {
    if (streamManager && videoRef.current) {
      streamManager.addVideoElement(videoRef.current)
    }
  }, [streamManager])

  const getNicknameTag = () =>
    JSON.parse(streamManager.stream.connection.data).clientData

  return (
    <Container>
      <video autoPlay={autoplay} ref={videoRef}>
        <track kind="captions" />
      </video>
      <div>
        <p>{getNicknameTag()}</p>
      </div>
    </Container>
  )
}

export default UserVideoComponent
