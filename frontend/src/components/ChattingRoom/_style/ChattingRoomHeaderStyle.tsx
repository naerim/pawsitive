import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 390px;
  height: 40px;
  z-index: 100;
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`

export const Top = styled.div`
  display: flex;
  height: 40px;
  align-items: center;

  img {
    width: 14px;
    height: 18px;
    cursor: pointer;
  }

  span {
    margin-left: 10px;
    font-size: 1em;
    font-weight: 500;
  }
`
