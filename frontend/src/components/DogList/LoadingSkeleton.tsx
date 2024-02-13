import * as d from '@src/container/style/DogListContainerStyle'

const LoadingSkeleton = () => (
  <>
    {Array.from({ length: 6 }, (_, index) => (
      <d.FakeDiv key={index} />
    ))}
  </>
)

export default LoadingSkeleton
