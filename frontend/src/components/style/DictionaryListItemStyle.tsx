import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 6px;
  border: 1px solid #d7d7d7;
  border-radius: 10px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`

export const Category = styled.div`
  color: #ff9232;
  font-weight: 500;
  font-size: 0.7em;
`

export const Title = styled.div`
  color: #000;
  font-size: 1em;
  font-weight: 500;
  line-height: 1.5;
  margin: 2px 0;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  padding: 6px;
`
