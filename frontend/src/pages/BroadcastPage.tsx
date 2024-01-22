import {
  Device,
  OpenVidu,
  Publisher,
  Session as OVSession,
  StreamManager,
  Subscriber,
} from 'openvidu-browser'

import axios from 'axios'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import UserVideoComponent from '@src/components/Meeting/UserVideoComponent'

// const APPLICATION_SERVER_URL = `https://${window.location.hostname}:4443`
const OPENVIDU_SERVER_SECRET = 'MY_SECRET'

export default function BroadcastPage() {
  const [mySessionId, setMySessionId] = useState<string>('SessionA')
  const [myUserName, setMyUserName] = useState<string>(
    `Participant${Math.floor(Math.random() * 100)}`,
  )
  const [session, setSession] = useState<OVSession | ''>('')
  const [mainStreamManager, setMainStreamManager] =
    useState<StreamManager | null>(null)
  const [publisher, setPublisher] = useState<Publisher | null>(null)
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [, setCurrentVideoDevice] = useState<Device | undefined>(undefined)

  const OV = useRef(new OpenVidu())

  const handleChangeSessionId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMySessionId(e.target.value)
    },
    [],
  )

  const handleChangeUserName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMyUserName(e.target.value)
    },
    [],
  )

  const handleMainVideoStream = useCallback(
    (stream: StreamManager) => {
      if (mainStreamManager !== stream) {
        setMainStreamManager(stream)
      }
    },
    [mainStreamManager],
  )

  const deleteSubscriber = useCallback((streamManager: StreamManager) => {
    setSubscribers(prevSubscribers => {
      let index = -1
      if (streamManager instanceof Subscriber) {
        index = prevSubscribers.indexOf(streamManager)
      }
      if (index > -1) {
        const newSubscribers = [...prevSubscribers]
        newSubscribers.splice(index, 1)
        return newSubscribers
      }
      return prevSubscribers
    })
  }, [])

  const joinSession = useCallback(() => {
    const mySession = OV.current.initSession()

    mySession.on('streamCreated', event => {
      const subscriber = mySession.subscribe(event.stream, undefined)
      setSubscribers(users => [...users, subscriber])
    })

    mySession.on('streamDestroyed', event => {
      deleteSubscriber(event.stream.streamManager)
    })

    mySession.on('exception', exception => {
      console.warn(exception)
    })

    setSession(mySession)
  }, [deleteSubscriber])

  const createSession = async (sessionId: string): Promise<string> => {
    const response = await axios.post(
      `http://localhost:4443/openvidu/api/sessions`,
      { customSessionId: sessionId },
      {
        headers: {
          Authorization: `Basic ${btoa(
            `OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`,
          )}`,
          'Content-Type': 'application/json',
        },
      },
    )
    return response.data // The sessionId
  }

  const createToken = async (sessionId: string) => {
    const response = await axios.post(
      `http://localhost:4443/openvidu/api/sessions/${sessionId}/connections`,
      {},
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
    return response.data // The token
  }

  const getToken = useCallback(async () => {
    return createSession(mySessionId).then(sessionId => createToken(sessionId))
  }, [mySessionId])

  useEffect(() => {
    if (session) {
      // Get a token from the OpenVidu deployment
      getToken().then(async token => {
        try {
          await session.connect(token, { clientData: myUserName })

          const publisherOne = await OV.current.initPublisherAsync(undefined, {
            audioSource: undefined,
            videoSource: undefined,
            publishAudio: true,
            publishVideo: true,
            resolution: '640x480',
            frameRate: 30,
            insertMode: 'APPEND',
            mirror: false,
          })

          await session.publish(publisherOne)

          const devices = await OV.current.getDevices()
          const videoDevices = devices.filter(
            device => device.kind === 'videoinput',
          )
          const currentVideoDeviceId = publisherOne.stream
            .getMediaStream()
            .getVideoTracks()[0]
            .getSettings().deviceId
          const currentVideoDeviceOne = videoDevices.find(
            device => device.deviceId === currentVideoDeviceId,
          )

          setMainStreamManager(publisher)
          setPublisher(publisher)
          setCurrentVideoDevice(currentVideoDeviceOne)
        } catch (error) {
          console.log(error)
        }
      })
    }
  }, [session, myUserName, getToken, publisher])

  const leaveSession = useCallback(() => {
    // Leave the session
    if (session) {
      session.disconnect()
    }

    // Reset all states and OpenVidu object
    OV.current = new OpenVidu()
    setSession('')
    setSubscribers([])
    setMySessionId('SessionA')
    setMyUserName(`Participant${Math.floor(Math.random() * 100)}`)
    setMainStreamManager(null)
    setPublisher(null)
  }, [session])

  // const switchCamera = useCallback(async () => {
  //   try {
  //     const devices = await OV.current.getDevices()
  //     const videoDevices = devices.filter(
  //       device => device.kind === 'videoinput',
  //     )
  //
  //     if (videoDevices && videoDevices.length > 1) {
  //       const newVideoDevice = videoDevices.filter(
  //         device => device.deviceId !== currentVideoDevice.deviceId,
  //       )
  //
  //       if (newVideoDevice.length > 0) {
  //         const newPublisher = OV.current.initPublisher(undefined, {
  //           videoSource: newVideoDevice[0].deviceId,
  //           publishAudio: true,
  //           publishVideo: true,
  //           mirror: true,
  //         })
  //
  //         if (session) {
  //           await session.unpublish(mainStreamManager)
  //           await session.publish(newPublisher)
  //           setCurrentVideoDevice(newVideoDevice[0])
  //           setMainStreamManager(newPublisher)
  //           setPublisher(newPublisher)
  //         }
  //       }
  //     }
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, [currentVideoDevice, session, mainStreamManager])

  useEffect(() => {
    const handleBeforeUnload = () => {
      leaveSession()
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [leaveSession])

  /**
   * --------------------------------------------
   * GETTING A TOKEN FROM YOUR APPLICATION SERVER
   * --------------------------------------------
   * The methods below request the creation of a Session and a Token to
   * your application server. This keeps your OpenVidu deployment secure.
   *
   * In this sample code, there is no user control at all. Anybody could
   * access your application server endpoints! In a real production
   * environment, your application server must identify the user to allow
   * access to the endpoints.
   *
   * Visit https://docs.openvidu.io/en/stable/application-server to learn
   * more about the integration of OpenVidu in your application server.
   */

  return (
    <div className="container">
      {session === '' ? (
        <div id="join">
          <div id="img-div">
            <div>이미지</div>
          </div>
          <div id="join-dialog" className="jumbotron vertical-center">
            <h1> Join a video session </h1>
            <form className="form-group" onSubmit={joinSession}>
              <p>
                <label>Participant: </label>
                <input
                  className="form-control"
                  type="text"
                  id="userName"
                  value={myUserName}
                  onChange={handleChangeUserName}
                  required
                />
              </p>
              <p>
                <label> Session: </label>
                <input
                  className="form-control"
                  type="text"
                  id="sessionId"
                  value={mySessionId}
                  onChange={handleChangeSessionId}
                  required
                />
              </p>
              <p className="text-center">
                <input
                  className="btn btn-lg btn-success"
                  name="commit"
                  type="submit"
                  value="JOIN"
                />
              </p>
            </form>
          </div>
        </div>
      ) : null}

      {session !== undefined ? (
        <div id="session">
          <div id="session-header">
            <h1 id="session-title">{mySessionId}</h1>
            <input
              className="btn btn-large btn-danger"
              type="button"
              id="buttonLeaveSession"
              onClick={leaveSession}
              value="Leave session"
            />
          </div>

          {mainStreamManager ? (
            <div id="main-video" className="col-md-6">
              <UserVideoComponent streamManager={mainStreamManager} />
            </div>
          ) : null}
          <div id="video-container" className="col-md-6">
            {publisher && (
              <div
                className="stream-container col-md-6 col-xs-6"
                role="presentation"
                onClick={() => handleMainVideoStream(publisher)}
              >
                <UserVideoComponent streamManager={publisher} />
              </div>
            )}
            {subscribers.map(sub => (
              <div
                key={sub.id}
                className="stream-container col-md-6 col-xs-6"
                role="presentation"
                onClick={() => handleMainVideoStream(sub)}
              >
                <span>{sub.id}</span>
                <UserVideoComponent streamManager={sub} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
