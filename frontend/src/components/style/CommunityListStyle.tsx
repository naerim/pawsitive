import styled from 'styled-components'

export const Box = styled.div`
  margin: 0px 10px;
  padding: 0px 10px;
  border-radius: 10px;
`
export const Container = styled.div`
  width: auto;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fde2ca;
  border-radius: 10px;
  color: #ff984f;
`

export const H1 = styled.h1`
  font-weight: bolder;
  font-size: 17px;
`

export const Col = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`

export const P = styled.p`
  margin-top: 7px;
  font-size: 13px;
  flex: 1;
`

export const CategoryList = styled.div`
  display: flex;
  overflow-x: auto; /* 가로 스크롤을 허용하도록 설정 */
  white-space: nowrap; /* 내용물이 한 줄로 유지되도록 설정 */
`

export const CategorySingle = styled.p``
