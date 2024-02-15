import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 90px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Number = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #ff9232;
`

export const Content = styled.div`
  font-size: 15px;
  font-weight: normal;
  color: #000000;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
`
export const Answer = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  padding: 8px 0;
  font-size: 15px;

  &::placeholder {
    text-align: center;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #ff9232;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
`
