import React from 'react'
import { Link } from 'react-router-dom'
import * as c from '@src/components/style/DictionaryList'
import { DictionaryItemType } from '@src/types/components/DictionaryType'

interface DictionaryListProps {
  data: DictionaryItemType[]
}

const DictionaryList: React.FC<DictionaryListProps> = ({ data }) => {
  return (
    <div>
      <c.h1Styles>펫과사전 전체 목록</c.h1Styles>
      <c.ulStyles>
        {data.map(item => (
          <c.liStyles key={item.contentNo}>
            <Link to={`/dictionary/${item.contentNo}`}>
              <c.strongStyles>{item.title}</c.strongStyles>
            </Link>
            {item.image && <c.imgStyles src={item.image} alt="" />}
          </c.liStyles>
        ))}
      </c.ulStyles>
    </div>
  )
}

export default DictionaryList
