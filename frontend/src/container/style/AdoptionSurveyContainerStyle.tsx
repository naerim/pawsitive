import styled from 'styled-components'

export const Container = styled.div``

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 100px;

  &:focus,
  &:active {
    outline: none;
  }
`

export const BackButton = styled.div`
  background-color: white;
  border: none;
  margin: 10px 0 0 0;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 10px;
  }

  &:disabled {
    background-color: #bebebe;
    cursor: not-allowed;
  }
`

export const Title = styled.h1`
  margin: 10px 0 10px 0;
  font-weight: 600;
  font-size: 20px;
`
export const Section = styled.h1`
  font-weight: 500;
  font-size: 18px;
`
export const Content = styled.p`
  margin: 10px 0;
  font-size: 15px;
  line-height: 1.5;
`

export const CheckBoxDiv = styled.div`
  display: flex;
  justify-content: left;
  margin: 10px 0;
`

export const Question = styled.h1`
  font-weight: bolder;
  font-size: 16px;
`
export const Step = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto 0;
  font-weight: 500;
  text-align: center;
  color: #ff9232;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 100px);
`

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: auto;
  padding-bottom: 80px;
`

export const Button = styled.button`
  background-color: #ff9232;
  color: #fff;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #bebebe;
    cursor: not-allowed;
  }

  &:focus,
  &:active {
    outline: none;
  }
`
