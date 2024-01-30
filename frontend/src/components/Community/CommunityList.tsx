import { Link } from 'react-router-dom'
import React from 'react'
import { CommunityItemType } from '@src/types/components/CommunityType'

interface CommunityListProps {
  data: CommunityItemType[]
}

const CommunityList: React.FC<CommunityListProps> = props => {
  const { data } = props
  return (
    <div>
      <h1>리스트 전체 목록</h1>
      {data?.map(item => (
        <li key={item.contentNo}>
          <Link to={`${item.contentNo}`}>{item.title}</Link>
        </li>
      ))}
    </div>
  )
}

export default CommunityList
