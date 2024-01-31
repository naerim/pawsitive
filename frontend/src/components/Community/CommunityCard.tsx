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
        <c.H1>{data.board.title}</c.H1>
        <c.Category>{data.board.communityCategoryName}</c.Category>
      </c.Col>
      <c.Col>
        <c.P>{data.board.content}</c.P>
        <c.P>{data.board.memberName}</c.P>
      </c.Col>
    </c.Container>
  )
}

export default CommunityCard
