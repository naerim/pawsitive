import { StreamManager } from 'openvidu-browser'

export type WebcamScreenType = {
  setWebcamVisible: (v: boolean) => void
  mySessionId: string
  setMySessionId: (v: string) => void
}

export type UserVideoComponentType = {
  streamManager: StreamManager | undefined
}
