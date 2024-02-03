import { Link } from 'react-router-dom'
import CommunityListItem from '@src/components/CommunityList/CommunityListItem'
import * as c from '@src/components/style/CommunityListSectionStyle'
import { CommunityItemType } from '@src/types/components/CommunityType'
import React from 'react'

interface CommunityListProps {
  data: CommunityItemType[]
}

const CommunityListSection: React.FC<CommunityListProps> = props => {
  const { data } = props

  return (
    <c.Container>
      <c.Wrap>
        {data &&
          Array.isArray(data) &&
          data.map(item => (
            <Link key={item.boardNo} to={`${item.boardNo}`}>
              <CommunityListItem data={item} />
            </Link>
          ))}
      </c.Wrap>
    </c.Container>
  )
}

export default CommunityListSection
