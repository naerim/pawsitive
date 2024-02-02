import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 5px 0px 0px;
`

export const Container = styled.div``

export const HeaderButton = styled.button`
  height: 30px;
  width: auto;
  margin: 5px 0px 5px 5px;
  padding: 0px 7px;
  //padding-right: 7px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 14px;

  &:focus {
    outline: none; /* 포커스 시에도 테두리가 나타나지 않도록 설정합니다. */
  }
`

export const Button = styled.button`
  height: 25px;
  width: auto;
  margin: 5px 0px 5px 5px;
  //margin-bottom: 5px;
  //margin-right: 5px;
  padding: 0px 7px;
  //padding-right: 7px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 650;
  border-radius: 8px;

  &:focus {
    outline: none; /* 포커스 시에도 테두리가 나타나지 않도록 설정합니다. */
  }
`
