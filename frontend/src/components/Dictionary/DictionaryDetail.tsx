import React from 'react'
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
        <div>
          {item.image && <img src={item.image} alt="" />}
          <h2>{item.title}</h2>
          <p>정보 : {item.content && JSON.parse(item.content).description}</p>
          <p>부가 정보 : {item.content && JSON.parse(item.content).remarks}</p>
        </div>
      )
      break
    case '건강':
      contentRenderer = (
        <div>
          {item.image && <img src={item.image} alt="" />}
          <h2>{item.title}</h2>
          <p>정보 : {item.content && JSON.parse(item.content).description}</p>
          <p>증상 : {item.content && JSON.parse(item.content).symptom}</p>
          <p>예방 : {item.content && JSON.parse(item.content).prevent}</p>
        </div>
      )
      break
    case '상식':
      contentRenderer = (
        <div>
          {item.image && <img src={item.image} alt="" />}
          <h2>{item.title}</h2>
          <p>정보 : {item.content && JSON.parse(item.content).description}</p>
        </div>
      )
      break
    case '기타':
      contentRenderer = (
        <div>
          {item.image && <img src={item.image} alt="" />}
          <h2>{item.title}</h2>
          <p>정보 : {item.content && JSON.parse(item.content).description}</p>
        </div>
      )
      break

    default:
      contentRenderer = <div>알 수 없는 카테고리</div>
      break
  }

  return <div>{contentRenderer}</div>
}

export default DictionaryDetail
