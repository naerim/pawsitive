import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px 20px 0;
  padding: 10px 20px 60px;
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  font-size: 15px;
  font-weight: 500;
`

export const Button = styled.button`
  background-color: #ff9232;
  color: #fff;
  padding: 10px 0;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 60px;

  &:disabled {
    background-color: #bebebe;
    cursor: not-allowed;
  }
`
