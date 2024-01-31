import styled from 'styled-components'

export const Container = styled.div``
export const MapContainer = styled.div`
  position: relative;
`

export const Map = styled.div`
  width: auto;
  height: 400px;
  border: 3px solid #fbefe6;
  border-radius: 40px;
`

export const CurrentButton = styled.button`
  position: absolute;
  bottom: 13px;
  right: 13px;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  font-size: 35px;
`

export const InfoWindow = styled.div`
  width: auto;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fde2ca;
  border-radius: 10px;
  color: #ff984f;
`
