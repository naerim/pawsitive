import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 15px;
  margin: 40px auto;
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 15px;
  font-weight: 500;
  position: relative;
`

export const BackButton = styled.div`
  text-align: center;
  width: 20%;
  font-size: 15px;
  font-weight: 600;
`

export const Title = styled.div`
  text-align: center;
  width: 80%;
  font-size: 15px;
  font-weight: 600;
  margin-right: 20%;
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
