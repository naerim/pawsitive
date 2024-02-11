import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
  overflow: hidden;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const Category = styled.div`
  color: #ff9232;
  font-weight: 500;
  font-size: 0.8em;
`

export const Title = styled.div`
  color: #000;
  font-size: 1em;
  font-weight: 500;
  margin: 6px 0;
  line-height: 1.2;
  width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  transform: translate(2px, 10px) scale(1.3);
`
