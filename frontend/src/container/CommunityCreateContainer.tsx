import CreateForm from '@src/components/Community/CreateForm'
import KakaoMap from '@src/components/Community/KakaoMap'

const CommunityCreateContainer = () => {
  return (
    <div>
      <CreateForm />
      <KakaoMap dummyData={[]} />
    </div>
  )
}

export default CommunityCreateContainer
