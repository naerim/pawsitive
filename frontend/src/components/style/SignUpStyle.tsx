import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 16px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 10px;
`

export const Title = styled.label`
  display: block;
  font-size: 18px;
  color: #333;
`

export const RoleButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const RoleButton = styled.button<{ selected: boolean }>`
  width: 100%;
  padding: 10px;
  font-size: 15px;
  color: ${props => (props.selected ? '#FFFFFF' : '#A9A9A9')};
  background-color: ${props => (props.selected ? '#ff9232' : '#FFFFFF')};
  border: 1px solid ${props => (props.selected ? '#FF9232' : '#cbcbcb')};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`

export const TwoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
export const ThreeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ccc;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: none;
  outline: none;

  &::placeholder {
    color: #999;
    font-size: 15px;
  }
`

export const CheckButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #cbcbcb;
  border-radius: 15px;
  font-size: 10px;
  margin-bottom: 3px;
`

export const ErrorText = styled.div`
  margin-top: 10px;
  font-size: 13px;
  color: #ff9232;
`
