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
`

export const Title = styled.label`
  font-size: 14px;
  font-weight: 500;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding: 5px;
  font-size: 13px;
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
  height: 50px;
  background-color: ${props => (props.$isSelected ? '#FF9232' : '#fff')};
  color: ${props => (props.$isSelected ? '#fff' : '#CBCBCB')};
  border: 1px solid ${props => (props.$isSelected ? '#FF9232' : '#cbcbcb')};
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    background-color: #ff9232;
  }
`
