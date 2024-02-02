import { Link } from 'react-router-dom'
import React from 'react'
import { CommunityListType } from '@src/types/components/CommunityType'
import CommunityCard from '@src/components/Community/CommunityCard'
import * as c from '@src/components/style/CommunityListStyle'

interface CommunityListProps {
  data: CommunityListType
}

const CommunityList: React.FC<CommunityListProps> = props => {
  const { data } = props
  const Content = data.content
  return (
    <c.Box>
      {Content &&
        Content.map(item => (
          <Link key={item.boardNo} to={`${item.boardNo}`}>
            <CommunityCard data={item} />
          </Link>
        ))}
    </c.Box>
  )
}

export default CommunityList
