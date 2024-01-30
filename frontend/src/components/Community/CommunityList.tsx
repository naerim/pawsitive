import { Link } from 'react-router-dom'
import React from 'react'
import { CommunityItemType } from '@src/types/components/CommunityType'
import * as c from '@src/components/style/CommunityListStyle'

interface CommunityListProps {
  data: CommunityItemType[]
}

const CommunityList: React.FC<CommunityListProps> = props => {
  const { data } = props
  return (
    <c.Box>
      {data?.map(item => (
        <Link key={item.board.boardNo} to={`${item.board.boardNo}`}>
          <c.Container>
            <c.Col>
              <c.H1>{item.board.title}</c.H1>
              <c.Category>{item.board.communityCategoryName}</c.Category>
            </c.Col>
            <c.Col>
              <c.P>{item.board.content}</c.P>
              <c.P>{item.board.memberName}</c.P>
            </c.Col>
          </c.Container>
        </Link>
      ))}
    </c.Box>
  )
}

export default CommunityList
