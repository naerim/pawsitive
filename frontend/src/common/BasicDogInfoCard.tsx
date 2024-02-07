import * as b from '@src/common/style/BasicDogInfoCardStyle'
import { DogListType } from '@src/types/dogType'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BasicDogInfoCard: React.FC<{ dogInfo: DogListType }> = ({ dogInfo }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/dogs/${dogInfo.dogNo}`, { state: { dogNo: dogInfo.dogNo } })
  }

  return (
    <b.Container onClick={handleClick}>
      <b.AdoptStatus $status={dogInfo.statusNo === 0 ? '공고중' : '입양완료'}>
        {dogInfo.statusNo === 0 ? '공고중' : '입양완료'}
      </b.AdoptStatus>
      <b.ImgContainer>
        <b.Dogimg src={dogInfo.file} />
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
