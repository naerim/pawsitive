import styled from 'styled-components'

export const InputContainer = styled.div`
  margin-bottom: 16px;

  h3 {
    margin-bottom: 10px;
  }

  label {
    display: block;
    margin-bottom: 40px;

    input {
      margin-right: 5px;
    }
  }
`

export const InputLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #333;
`

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;

  &:focus {
    border-bottom-color: #007bff;
  }

  &::placeholder {
    color: #999;
  }
`

export const ErrorText = styled.div`
  margin-top: 10px;
  color: #ff9232;
`
