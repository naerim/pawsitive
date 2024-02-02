import * as c from '@src/components/style/CommunityListStyle'
import { CommunityItemType } from '@src/types/components/CommunityType'
import React from 'react'

interface CommunityProps {
  data: CommunityItemType
}

const CommunityCard: React.FC<CommunityProps> = props => {
  const { data } = props
  return (
    <c.Container>
      <c.Col>
        <c.H1>{data.title}</c.H1>
        <c.CategorySingle>{data.communityCategoryName}</c.CategorySingle>
      </c.Col>
      <c.Col>
        <c.P>{data.content}</c.P>
        <c.P>{data.memberName}</c.P>
      </c.Col>
    </c.Container>
  )
}

export default CommunityCard
