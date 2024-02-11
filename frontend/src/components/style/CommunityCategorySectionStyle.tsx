import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;
  -ms-overflow-style: none;
  height: 40px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.div<{ $select: boolean }>`
  display: flex;
  height: 28px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  padding: 6px 8px;
  border-radius: 28px;
  margin-right: 10px;
  border: 1px solid #eaeaea;
  background-color: ${props => (props.$select ? '#FFE7D3' : 'transparent')};

  img {
    width: 12px;
    height: 12px;
  }

  span {
    font-weight: 500;
    margin-left: 4px;
  }
`
