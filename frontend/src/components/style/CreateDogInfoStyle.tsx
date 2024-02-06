import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
`

export const Input = styled.input`
  margin-top: 15px;
  border: none;
  border-bottom: 1px solid #000;
  padding: 5px;
  font-size: 13px;
`

export const RadioButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`

export const RadioButton = styled.button<{ $isSelected: boolean }>`
  width: 150px;
  height: 50px;
  background-color: ${props => (props.$isSelected ? '#FF9232' : '#fff')};
  color: ${props => (props.$isSelected ? '#fff' : '#CBCBCB')};
  border: 1px solid ${props => (props.$isSelected ? '#FF9232' : '#cbcbcb')};
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    background-color: #ff9232;
  }
`
