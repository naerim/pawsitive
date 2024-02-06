import styled from 'styled-components'

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin: 10px;
`

export const ReturnButton = styled.button`
  grid-column: 1;
  font-size: 20px;
`

export const H1 = styled.h1`
  font-weight: 510;
  font-size: 16px;
  text-align: center;
  grid-column: 2;
`
