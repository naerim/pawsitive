import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  width: 390px;
  bottom: 0;
  z-index: 100;
  height: 60px;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2%;
  height: 60px;

  input {
    width: 75%;
    height: 60%;
    background-color: #f2f3f6;
    border: none;
    padding: 4px 10px;
    border-radius: 10px;

    &:focus {
      outline: none;
    }
  }
`

export const PlusButton = styled.button`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  img {
    width: 60%;
    height: 60%;
  }
`

export const SendButton = styled.button`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  img {
    width: 50%;
    height: 50%;
  }
`
