import styled from 'styled-components'

export const Container = styled.div``
export const MapContainer = styled.div`
  position: relative;
`

export const Map = styled.div`
  width: auto;
  height: 580px;
  //border: 3px solid #fbefe6;
  border-radius: 10px;
`

export const CurrentButton = styled.button`
  position: absolute;
  bottom: 13px;
  right: 13px;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  font-size: 35px;
  outline: none;

  .img {
    width: 50px;
    height: auto;
    margin-bottom: -10px;
    opacity: 0.5;
  }

  &:focus {
    outline: none; /* 포커스 시에도 테두리가 나타나지 않도록 설정합니다. */
  }
`

export const InfoWindow = styled.div`
  width: auto;
  height: 100px;
  //margin-top: 10px;
  //margin-bottom: 10px;
  padding: 10px;
  background-color: #fffaf7;
  border-radius: 10px;
`
