import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 20px auto 0;
  padding: 20px;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
  position: relative;
  margin: 0 10px;
`

export const BackButtonWrap = styled.div`
  cursor: pointer;

  img {
    width: 9px;
    height: 15px;
  }
`

export const Span = styled.div`
  width: 9px;
  height: 10px;
`

export const Title = styled.div`
  text-align: center;
  font-size: 1em;
  font-weight: 500;
`
