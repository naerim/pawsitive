import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 10px auto;
  height: 40px;
`

export const Container = styled.div``

export const CategoryDiv = styled.div`
  margin: 0 0 0 20px;
`

export const HeaderButton = styled.button`
  width: auto;
  font-weight: 500;
  background-color: white;
  border: none;

  &:focus {
    outline: none; /* 포커스 시에도 테두리가 나타나지 않도록 설정합니다. */
  }
`

export const CreateButton = styled.button`
  color: #ff9232;
`
