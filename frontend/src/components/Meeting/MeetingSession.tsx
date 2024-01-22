import { Publisher, Subscriber } from 'openvidu-browser'
import { useEffect, useState } from 'react'
import MeetingVideo from '@src/components/Meeting/MeetingVideo'

interface SessionProps {
  subscriber: Subscriber
  publisher: Publisher
}

const MeetingSession = ({ subscriber, publisher }: SessionProps) => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])

  useEffect(() => {
    if (subscriber) {
      setSubscribers(prevSubscribers => [...prevSubscribers, subscriber])
    }
  }, [subscriber])

  const adjustGridPlacement = (subscriberCount: number) => {
    if (subscriberCount <= 1) {
      return 'center'
    }
    return 'normal'
  }

  const renderSubscribers = () => {
    const gridPlacement = adjustGridPlacement(subscribers.length)

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: gridPlacement === 'center' ? '1fr' : '1fr 1fr',
          gap: '20px',
        }}
      >
        <div>
          <div>publisher</div>
          <MeetingVideo streamManager={publisher} />
        </div>
        {subscribers.map(subscriberItem => (
          <div key={subscriberItem.id}>
            <MeetingVideo streamManager={subscriberItem} />
          </div>
        ))}
      </div>
    )
  }

  return <div>{renderSubscribers()}</div>
}

export default MeetingSession
