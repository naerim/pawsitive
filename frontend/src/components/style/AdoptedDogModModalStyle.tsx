import styled from 'styled-components'

export const InputContainer = styled.div`
  font-weight: 500;
`
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  margin: 5px;
  height: 25px;

  &:focus {
    outline: none;
    color: #f59021;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`
