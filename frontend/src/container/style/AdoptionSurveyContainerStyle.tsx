import styled from 'styled-components'

export const Container = styled.div``

export const BackButtonContainer = styled.div`
  width: 100%;
  border-bottom: 3.5px solid rgb(255, 212, 175);

  &:focus,
  &:active {
    outline: none;
  }

  img {
    width: 26px;
    margin: 40px 0 20px 25px;
  }
`

export const BackButton = styled.button`
  background-color: white;
  border: none;
  margin: 10px 0 0 0;
  border-radius: 5px;
  cursor: pointer;

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
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #ff9232;
  margin: 45px 0 0 0;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 570px;
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

  &:focus,
  &:active {
    outline: none;
  }
`
