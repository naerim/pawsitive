import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2px;
`

export const Title = styled.label`
  font-size: 0.9em;
  font-weight: 500;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #cbcbcb;
  padding: 5px 0;
  font-size: 0.9em;

  &:focus {
    outline: none;
    border-bottom: 1px solid #ff9232;
  }

  &::placeholder {
    color: #a9a9a9;
  }
`

export const TwoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled.button<{ $isSelected: boolean }>`
  width: 150px;
  height: 46px;
  background-color: ${props => (props.$isSelected ? '#FF9232' : '#fff')};
  color: ${props => (props.$isSelected ? '#fff' : '#CBCBCB')};
  border: 1px solid ${props => (props.$isSelected ? '#FF9232' : '#cbcbcb')};
  font-size: 0.9em;
  font-weight: 300;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    border: #ff9232;
    background-color: #ff9232;
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`

export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
  padding: 6px;
  border: 1px solid #cbcbcb;

  &:focus {
    outline: none;
  }
`
