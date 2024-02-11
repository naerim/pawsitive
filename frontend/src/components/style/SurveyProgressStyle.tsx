import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 4px;
  background-color: #f4f4f4;
`

export const Wrap = styled.div<{ $height: number }>`
  width: ${props => `${props.$height}%`};
  height: 4px;
  background-color: #ff9232;
`
