import React from 'react'
import styled from 'styled-components'
import { DictionaryItemType } from '@src/types/components/DictionaryType'

interface DictionaryListProps {
  data: DictionaryItemType[]
}

const StyledDictionaryList = styled.div`
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap; /* 한 행에 2개씩 렌더링되도록 설정 */
  }

  li {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    width: calc(50% - 20px); /* 행당 2개의 항목이므로 50%로 설정 */
  }

  strong {
    font-size: 18px;
    margin-bottom: 10px;
    display: block;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
`

const DictionaryList: React.FC<DictionaryListProps> = ({ data }) => {
  return (
    <StyledDictionaryList>
      <h1>펫과사전 전체 목록</h1>
      <ul>
        {data.map(item => (
          <li key={item.contentNo}>
            <strong>{item.title}</strong>
            {item.image && <img src={item.image} alt="" />}
          </li>
        ))}
      </ul>
    </StyledDictionaryList>
  )
}

export default DictionaryList
