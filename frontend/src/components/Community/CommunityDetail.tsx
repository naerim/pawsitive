import React from 'react'
import * as c from '@src/components/style/CommunityDetailStyle'
import { CommunityDetailType } from '@src/types/components/CommunityType'

interface CommunityDetailProps {
  data: CommunityDetailType
}

const CommunityDetail: React.FC<CommunityDetailProps> = props => {
  const { data } = props

  return (
    <c.Box>
      <c.Container>
        <c.H1>제목: {data.board.title}</c.H1>
      </c.Container>
      <c.Container>
        <c.P>카테고리: {data.board.communityCategoryName}</c.P>
      </c.Container>
      <c.Container>
        <c.P>내용: {data.board.content}</c.P>
      </c.Container>
      <c.Container>
        <c.P>
          사진: {data.board.images ? data.board.images : '이미지가 없습니다.'}
        </c.P>
      </c.Container>
      <c.Container>
        <c.P>공개여부: {data.board.isPublic}</c.P>
      </c.Container>
      <c.Container>
        <c.P>
          위도, 경도: {data.board.latitude}, {data.board.longitude}
        </c.P>
      </c.Container>
    </c.Box>
  )
}

export default CommunityDetail
