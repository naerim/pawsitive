import { StreamManager } from 'openvidu-browser'

export type WebcamScreenType = {
  setWebcamVisible: (v: boolean) => void
  mySessionId: string
  setMySessionId: (v: string) => void
  member: {
    image: string | null
    name: string
    userNo: number
  }
  shelter: {
    image: string | null
    name: string
    userNo: number
  }
}

export type UserVideoComponentType = {
  streamManager: StreamManager | undefined
}
