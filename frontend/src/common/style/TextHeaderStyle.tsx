import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 390px;
  height: 60px;
  z-index: 100;
  background-color: #fff;
  padding: 0 5%;
`

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  font-weight: 500;
  font-size: 1.1em;
`

export const PlusButton = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding: 3% 0 3% 3%;
  cursor: pointer;
`
