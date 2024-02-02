import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
`

export const Wrap = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0 40px 0;
`

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  margin-top: 40px;
  button {
    width: 49%;
    height: 100%;
    font-size: 1.1em;
    &:first-child {
      background-color: #fff3e9;
      color: #ff9232;
    }
    &:last-child {
      background-color: #ff9232;
      color: #fff;
    }
  }
`
