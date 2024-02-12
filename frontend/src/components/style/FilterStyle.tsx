import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
  margin: 0 auto 20px auto;
  border-radius: 6px;
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
  color: ${props => (props.$select ? '#eaeaea' : '#fffff')};
  background-color: ${props => (props.$select ? '#FF9232' : 'transparent')};

  img {
    width: 12px;
    height: 12px;
  }

  span {
    font-weight: 500;
    margin-left: 4px;
  }
`
