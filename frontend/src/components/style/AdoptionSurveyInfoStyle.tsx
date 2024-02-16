import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  height: 100vh;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  margin: 20px auto 0 auto;
`

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 20px;

  .right {
    width: 20px;
  }
`

export const CloseButton = styled.button`
  width: 26px;
  height: 26px;
  background-color: #ffffff;

  img {
    width: 100%;
    height: 100%;
    padding: 4px;
  }
`

export const DoneButton = styled.div`
  margin-top: auto;

  button {
    width: 100%;
    background-color: #ff9232;
    padding: 11px;
    color: #fff;
  }
`
