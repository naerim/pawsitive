import * as c from '@src/components/style/CommunityListItemStyle'
import { CommunityPopularType } from '@src/types/components/CommunityType'
import React from 'react'

interface CommunityProps {
  data: CommunityPopularType
}

const CommunityCard: React.FC<CommunityProps> = props => {
  const { data } = props
  return (
    <c.Container>
      <img src="/img/img_dog_medication.png" alt="" />
      <c.Right>
        <c.Category>{data.communityCategoryName}</c.Category>
        <c.Title>{data.title}</c.Title>
        <c.Desc>{data.content}</c.Desc>
      </c.Right>
    </c.Container>
  )
}

export default CommunityCard
