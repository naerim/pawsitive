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

  const renderContent = (content: any) => {
    return (
      <c.DetailContainer>
        <c.DetailTitle>{item.title}</c.DetailTitle>
        {content.map((info: string, index: number) => (
          <c.DetailInfo key={index}>{info}</c.DetailInfo>
        ))}
      </c.DetailContainer>
    )
  }

  let contentRenderer: React.ReactNode

  switch (item.contentCategoryName) {
    case '펫티켓':
      contentRenderer = renderContent([
        `정보 : ${JSON.parse(item.content).description}`,
        `부가 정보 : ${JSON.parse(item.content).remarks}`,
      ])
      break
    case '질병정보':
      contentRenderer = renderContent([
        `정보 : ${JSON.parse(item.content).description}`,
        `증상 : ${JSON.parse(item.content).symptom}`,
        `예방 : ${JSON.parse(item.content).prevent}`,
      ])
      break
    case '행동교육':
    case '애견상식':
      contentRenderer = renderContent([
        `정보 : ${JSON.parse(item.content).description}`,
      ])
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

// // 1. 펫티켓
// console.log(item.title)
// console.log(JSON.parse(item.content).description)
// console.log(JSON.parse(item.content).remarks)
// // 2. 질병정보
// console.log(item.title)
// console.log(JSON.parse(item.content).description)
// console.log(JSON.parse(item.content).symptom)
// console.log(JSON.parse(item.content).prevent)
// // 3. 행동교육
// console.log(item.title)
// console.log(JSON.parse(item.content).description)
// // 4. 애견상식
// console.log(item.title)
// console.log(JSON.parse(item.content).description)
