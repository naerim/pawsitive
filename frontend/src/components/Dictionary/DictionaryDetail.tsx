import React from 'react'
import * as c from '@src/components/style/DictionaryDetail'
import { DictionaryItemType } from '@src/types/components/DictionaryType'

interface DictionaryDetailProps {
  item: DictionaryItemType | null
}

const DictionaryDetail: React.FC<DictionaryDetailProps> = ({ item }) => {
  if (!item) {
    return <div>로딩 중...</div>
  }
  let contentRenderer: React.ReactNode
  switch (item.contentCategoryName) {
    case '펫티켓':
      contentRenderer = (
        <c.DetailContainer>
          {item.image && <c.DetailImg src={item.image} alt="" />}
          <c.DetailTitle>{item.title}</c.DetailTitle>
          <c.DetailInfo>
            정보 : {item.content && JSON.parse(item.content).description}
          </c.DetailInfo>
          <c.DetailInfo>
            부가 정보 : {item.content && JSON.parse(item.content).remarks}
          </c.DetailInfo>
        </c.DetailContainer>
      )
      break
    case '건강':
      contentRenderer = (
        <c.DetailContainer>
          {item.image && <c.DetailImg src={item.image} alt="" />}
          <c.DetailTitle>{item.title}</c.DetailTitle>
          <c.DetailInfo>
            정보 : {item.content && JSON.parse(item.content).description}
          </c.DetailInfo>
          <c.DetailInfo>
            증상 : {item.content && JSON.parse(item.content).symptom}
          </c.DetailInfo>
          <c.DetailInfo>
            예방 : {item.content && JSON.parse(item.content).prevent}
          </c.DetailInfo>
        </c.DetailContainer>
      )
      break
    case '상식':
      contentRenderer = (
        <c.DetailContainer>
          {item.image && <c.DetailImg src={item.image} alt="" />}
          <c.DetailTitle>{item.title}</c.DetailTitle>
          <c.DetailInfo>
            정보 : {item.content && JSON.parse(item.content).description}
          </c.DetailInfo>
        </c.DetailContainer>
      )
      break
    case '기타':
      contentRenderer = (
        <c.DetailContainer>
          {item.image && <c.DetailImg src={item.image} alt="" />}
          <c.DetailTitle>{item.title}</c.DetailTitle>
          <c.DetailInfo>
            정보 : {item.content && JSON.parse(item.content).description}
          </c.DetailInfo>
        </c.DetailContainer>
      )
      break

    default:
      contentRenderer = (
        <c.DetailUnknownCategory>알 수 없는 카테고리</c.DetailUnknownCategory>
      )
      break
  }

  return <div>{contentRenderer}</div>
}

export default DictionaryDetail
