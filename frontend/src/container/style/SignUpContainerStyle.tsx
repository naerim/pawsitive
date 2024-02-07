import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 15px;
  margin: 40px auto;
`

export const BackButtonContainer = styled.div`
  font-size: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 630px;
  margin-top: 20px;
`

export const ButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`

export const Button = styled.button`
  background-color: #ff9232;
  color: #fff;
  width: 100%;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #bebebe;
    cursor: not-allowed;
  }
`
