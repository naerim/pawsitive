import React from 'react'
import { CommunityItemType } from '@src/types/components/CommunityType'

interface CommunityDetailProps {
  data: CommunityItemType
}

const CommunityDetail: React.FC<CommunityDetailProps> = props => {
  const { data } = props

  return (
    <div>
      <h1>디테일페이지입니다</h1>
      제목: {data.title}
    </div>
  )
}

export default CommunityDetail
