import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Map = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid gray;
  border-radius: 40px;
`

export const CurrentButton = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  font-size: 30px;
`
