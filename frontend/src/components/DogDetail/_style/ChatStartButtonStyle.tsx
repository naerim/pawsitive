import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 390px;
  bottom: 0;
  height: 80px;
  z-index: 100;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
`

export const Button = styled.button`
  width: 88%;
  height: 40px;
  background-color: #ff9232;
  color: #fff;
`
