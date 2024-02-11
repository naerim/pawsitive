import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 100px;
  height: calc(100vh - 100px);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px 0 0;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #cbcbcb;
  box-sizing: border-box;

  &:focus,
  &:active {
    outline: none;
  }

  &::placeholder {
    color: #a9a9a9;
  }
`
export const Button = styled.button`
  background-color: #fd9132;
  color: #fff;
  padding: 7px;
  border: none;
  height: 40px;
  margin-top: 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
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
  margin-top: auto;
  justify-content: center;
  font-size: 14px;
  color: #000;

  p {
    color: #000;
  }

  &:focus,
  &:active {
    outline: none;
  }
`
