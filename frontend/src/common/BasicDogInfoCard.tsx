import * as b from '@src/common/style/BasicDogInfoCardStyle'
import { BasicDogType } from '@src/types/dogType'
import React from 'react'

const BasicDogInfoCard: React.FC<{ dogInfo: BasicDogType }> = ({ dogInfo }) => {
  return (
    <b.Container>
      <b.AdoptStatus>{dogInfo.statusName}</b.AdoptStatus>
      <b.ImgContainer>
        <b.Dogimg src={dogInfo.image} />
      </b.ImgContainer>
      <b.DogTextInfoContainer>
        <b.DogName>{dogInfo.name}</b.DogName>
        <b.SubInfo>
          {dogInfo.sex === 'f' ? '암컷' : '수컷'} ∙ 중성화
          {dogInfo.neutralized ? '0' : 'X'}
        </b.SubInfo>
        <b.SubInfo>
          {dogInfo.age}(년생) ∙ {dogInfo.kind}
        </b.SubInfo>
      </b.DogTextInfoContainer>
    </b.Container>
  )
}

export default BasicDogInfoCard
