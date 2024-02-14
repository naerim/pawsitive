import { RecommendDogResType } from '@src/types/dogType'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import * as s from '@src/components/style/SaveDogListSectionStyle'

const SaveDogListSection = (props: { data: RecommendDogResType[] }) => {
  const { data } = props

  return (
    <s.Container>
      {data &&
        data.map((item: RecommendDogResType) => (
          <BasicDogInfoCard key={item.dogNo} dogInfo={item} />
        ))}
    </s.Container>
  )
}

export default SaveDogListSection
