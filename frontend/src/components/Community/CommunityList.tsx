import { Link } from 'react-router-dom'
import React from 'react'
import { CommunityItemType } from '@src/types/components/CommunityType'
import CommunityCard from '@src/components/Community/CommunityCard'
import * as c from '@src/components/style/CommunityListStyle'

interface CommunityListProps {
  data: CommunityItemType[]
}

const CommunityList: React.FC<CommunityListProps> = props => {
  const { data } = props
  return (
    <c.Box>
      {data?.map(item => (
        <Link key={item.boardNo} to={`${item.boardNo}`}>
          <CommunityCard data={item} />
        </Link>
      ))}
    </c.Box>
  )
}

export default CommunityList
