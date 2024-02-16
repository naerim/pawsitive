import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Date = styled.div`
  padding: 29px;

  b {
    font-weight: 500;
    margin-right: 9px;
  }
`

export const MapWrap = styled.div`
  position: relative;
`

export const Map = styled.div`
  width: 100%;
  height: 175px;
`
export const Name = styled.div`
  padding: 19px 29px 8px 29px;
  font-weight: 500;
`

export const Address = styled.div`
  font-size: 0.9em;
  padding: 10px 29px 19px 29px;

  b {
    font-size: 0.8em;
    color: #ff9232;
    cursor: pointer;
  }
`
