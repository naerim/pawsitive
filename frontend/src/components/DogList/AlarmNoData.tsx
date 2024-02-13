import * as d from '@src/container/style/DogListContainerStyle'
import BasicDogInfoCard from '@src/common/BasicDogInfoCard'
import { DogListType } from '@src/types/dogType'

const AlarmNoData = ({ allDogList }: { allDogList: DogListType[] }) => {
  return (
    <>
      <d.NoDataContainer>
        <d.NoDataImg src="img/img_dog_food.png" />
        <d.NoDataText>해당되는 유기견이 존재하지 않습니다.</d.NoDataText>
        <d.NoDataText>전체 유기견을 보여드릴게요!</d.NoDataText>
      </d.NoDataContainer>
      <d.DogListContainerStyle>
        {allDogList.map(basicDogInfo => (
          <BasicDogInfoCard key={basicDogInfo.dogNo} dogInfo={basicDogInfo} />
        ))}
      </d.DogListContainerStyle>
    </>
  )
}

export default AlarmNoData
