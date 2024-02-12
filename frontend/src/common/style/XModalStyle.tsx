import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: #fff;
  width: 390px;
`

export const Wrap = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
  flex-direction: column;
`
export const CloseButton = styled.div`
  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`
