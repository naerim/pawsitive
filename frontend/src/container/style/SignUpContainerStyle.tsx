import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  max-width: 360px;
  margin: 60px auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  background-color: #ff9232;
  color: #fff;
  padding: 10px 0;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 400px;

  &:disabled {
    background-color: #bebebe;
    cursor: not-allowed;
  }
`
