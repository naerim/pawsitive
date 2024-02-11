import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`

export const Top = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100px;
`

export const BackButtonContainer = styled.div`
  img {
    width: 10px;
    cursor: pointer;
  }
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
  outline: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #bebebe;
    cursor: not-allowed;
  }
`
