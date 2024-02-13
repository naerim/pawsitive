import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 20px;
  width: 300px;
`

export const BarContainer = styled.div`
  width: 100%;
  height: 250px;
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    padding: 3px;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
  }
`
