import styled from 'styled-components'

export const h1Styles = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`

export const ulStyles = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap; /* 한 행에 2개씩 렌더링되도록 설정 */
`

export const liStyles = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  width: calc(50% - 20px); /* 행당 2개의 항목이므로 50%로 설정 */
`

export const strongStyles = styled.strong`
  font-size: 18px;
  margin-bottom: 10px;
  display: block;
`

export const imgStyles = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`

export const pStyles = styled.p`
  margin-bottom: 10px;
`
