import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  margin: 10px;
  padding: 20px;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin: 10px;
`

export const ReturnButton = styled.button`
  grid-column: 1;
  font-size: 20px;
`

export const H1 = styled.h1`
  font-weight: 510;
  font-size: 16px;
  text-align: center;
  grid-column: 2;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputForm = styled.div`
  margin: 40px 0px 20px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: none;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;

  &:focus,
  &:active {
    outline: none;
  }
`
export const Button = styled.button`
  background-color: #fd9132;
  color: #fff;
  padding: 7px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(253, 151, 78, 0.8);
  }

  &:focus,
  &:active {
    outline: none;
  }
`

export const NoMemoryLink = styled(Link)`
  &:focus,
  &:active {
    outline: none;
  }
`
export const P = styled.p`
  margin: 30px;
  text-align: center;
  font-size: 12px;
  color: #c8c8c8;
  text-decoration-line: underline;
`

export const GoToSignUp = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: black;

  &:focus,
  &:active {
    outline: none;
  }
`
