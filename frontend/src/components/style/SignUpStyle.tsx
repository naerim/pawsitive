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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const RoleButton = styled.button<{ selected: boolean }>`
  width: 100%;
  padding: 10px 0;
  font-size: 15px;
  color: ${props => (props.selected ? '#FFFFFF' : '#A9A9A9')};
  background-color: ${props => (props.selected ? '#ff9232' : '#FFFFFF')};
  border: 1px solid ${props => (props.selected ? '#FF9232' : '#cbcbcb')};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
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
